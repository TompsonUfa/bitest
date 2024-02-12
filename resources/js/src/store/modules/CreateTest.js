import router from "../../router/router.js";

export default {
    actions: {
        updateInfo(ctx, info) {
            ctx.commit('updateInfo', info);
        },
        updateQuestions(ctx, questions) {
            ctx.commit('updateQuestions', questions)
        },
        updateAccesses(ctx, accesses) {
            ctx.commit('updateAccesses', accesses)
        },
        clearStateTest(ctx) {
            ctx.commit('clearStateTest', '');
        },
        createTest(ctx) {
            const info = ctx.getters.cachedInfo;
            const questions = ctx.getters.cachedQuestions;
            const accesses = ctx.getters.cachedAccesses;
            const userId = ctx.getters.user.id;
            const missingFields = [];

            if (!info || !info.title) {
                missingFields.push("Заполните название теста");
            }

            if (questions.length === 0) {
                missingFields.push("Заполните вопросы для теста");
            }

            if (missingFields.length > 0) {
                ctx.commit("setMissingFields", missingFields);
                return {success: false, message: "Не все поля заполнены"};
            }

            const test = {
                title: info.title,
                image: info.image,
                timeComplete: info.timeComplete,
                attempts: info.attempts,
                limitQuestions: info.limitQuestions,
                published: info.published,
                userId: userId,
            };

            axios.post('/api/moder/tests',
                {
                    'info': test,
                    'questions': questions,
                    'accesses': accesses
                }).then((res) => {
                ctx.commit("setMissingFields", null);
                ctx.commit("clearStateTest");
                router.push({name: 'created-tests'});
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    mutations: {
        updateInfo(state, info) {
            const keyToUpdate = info[0];
            const valueToUpdate = info[1];
            const indexToUpdate = state.test.findIndex(item => Object.keys(item)[0] === keyToUpdate
                || Object.keys(item)[0] === keyToUpdate
                && Object.values(item)[0].id === valueToUpdate.id);

            if (indexToUpdate !== -1) {
                const existingItem = state.test[indexToUpdate][keyToUpdate];
                const updatedItem = {[keyToUpdate]: valueToUpdate};

                if (existingItem.questions) {
                    updatedItem[keyToUpdate].questions = existingItem.questions;
                }

                state.test.splice(indexToUpdate, 1, updatedItem);
            } else {
                state.test.push({[keyToUpdate]: valueToUpdate});
            }
        },
        updateQuestions(state, data) {
            const keyToUpdate = data[0];
            const valueToUpdate = data[1];
            const testId = data[2];
            const indexToUpdate = state.test.findIndex(item => Object.keys(item)[0] === keyToUpdate
                || Object.keys(item)[0] === keyToUpdate
                && Object.values(item)[0].id === testId);

            if (indexToUpdate !== -1) {
                state.test[indexToUpdate][keyToUpdate].questions = valueToUpdate;
            }
        },
        updateAccesses(state, accesses) {
            // state.accesses = accesses;
        },
        setMissingFields(state, missingFields) {
            state.missingFields = missingFields;
        },
        clearStateTest(state) {
            state.test = [];
            state.missingFields = [];
        }
    },
    state: {
        missingFields: [],
        test: [],
    },
    getters: {
        missingFields(state) {
            return state.missingFields;
        },
        cachedTest(state) {
            return state.test;
        }
    }
}
