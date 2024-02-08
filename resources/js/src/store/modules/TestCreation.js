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
            } else {
                // const test = {
                //     title: info.title,
                //     img: info.img,
                //     timeComplete: info.timeComplete.value,
                //     attempts: info.attempts.value,
                //     limitQuestions: info.limitQuestions.value,
                //     published: info.published,
                //     userId: userId,
                //     questions: questions,
                //     accesses: accesses,
                // };
                const formData = new FormData();
                formData.append('title', info.title);
                formData.append('img', info.img);
                formData.append('timeComplete', info.timeComplete.value);
                formData.append('attempts', info.attempts.value);
                formData.append('limitQuestions', info.limitQuestions.value);
                formData.append('published', info.published);
                formData.append('userId', userId);
                formData.append('questions', JSON.stringify(questions)); // Если questions - это массив объектов
                formData.append('accesses', JSON.stringify(accesses)); // Если accesses - это массив объектов

                axios.post('/api/moder', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }).then((res) => {
                    ctx.commit("setMissingFields", null);
                }).catch((err) => {
                    console.log(err)
                })
            }

        }
    },
    mutations: {
        updateInfo(state, info) {
            state.info = info;
        },
        updateQuestions(state, questions) {
            state.questions = questions;
        },
        updateAccesses(state, accesses) {
            state.accesses = accesses;
        },
        setMissingFields(state, missingFields) {
            state.missingFields = missingFields;
        }
    },
    state: {
        info: null,
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
