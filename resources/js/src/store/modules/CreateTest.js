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
            const indexToUpdate = state.info.findIndex(item => Object.keys(item)[0] === keyToUpdate);

            if (indexToUpdate !== -1) {
                const updatedItem = {[keyToUpdate]: valueToUpdate};
                state.info.splice(indexToUpdate, 1, updatedItem);
            } else {
                state.info.push({[keyToUpdate]: valueToUpdate});
            }
        },
        updateQuestions(state, questions) {
            const keyToUpdate = questions[0];
            const valueToUpdate = questions[1];
            const indexToUpdate = state.info.findIndex(item => Object.keys(item)[0] === keyToUpdate);

            if (indexToUpdate !== -1) {
                const updatedItem = {[keyToUpdate]: valueToUpdate};
                state.questions.splice(indexToUpdate, 1, updatedItem);
            } else {
                state.questions.push({[keyToUpdate]: valueToUpdate});
            }
        },
        updateAccesses(state, accesses) {
            state.accesses = accesses;
        },
        setMissingFields(state, missingFields) {
            state.missingFields = missingFields;
        },
        clearStateTest(state) {
            state.info = [];
            state.questions = [];
            state.accesses = [];
            state.missingFields = [];
        }
    },
    state: {
        info: [],
        questions: [],
        accesses: [],
        missingFields: [],
    },
    getters: {
        cachedAccesses(state) {
            return state.accesses;
        },
        cachedInfo(state) {
            return state.info
        },
        cachedQuestions(state) {
            return state.questions
        },
        missingFields(state) {
            return state.missingFields;
        },
    }
}
