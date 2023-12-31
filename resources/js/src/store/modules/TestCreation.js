export default {
    actions: {
        updateInfo(ctx, info){
            ctx.commit('updateInfo', info);
        },
        updateQuestions(ctx, questions){
            ctx.commit('updateQuestions', questions)
        },
        updateAccesses(ctx, accesses){
            ctx.commit('updateAccesses', accesses)
        },
        createTest(ctx){
            const info = ctx.getters.cachedInfo;
            const questions  = ctx.getters.cachedQuestions;
            const accesses = ctx.getters.cachedAccesses;
            const userId = ctx.getters.user.id;
            const missingFields = [];

            if (!info || !info.title){
                missingFields.push("Заполните название теста");
            }

            if (questions.length === 0){
                missingFields.push("Заполните вопросы для теста");
            }

            if (missingFields.length > 0){
                ctx.commit("setMissingFields", missingFields);
                return { success: false, message: "Не все поля заполнены" };
            } else {
                const test = {
                    info: {
                        title: info.title,
                        directionId: info.direction.id,
                        disciplineId: info.discipline.id,
                        time: info.time.value,
                        attempts: info.attempts.value,
                        displayQuestions: info.displayQuestions.value,
                        publication: info.publication,
                        userId: userId,
                    },
                    questions: questions,
                    accesses: accesses,
                };
                axios.post('/api/moder', test)
                    .then((res) => {
                        ctx.commit("setMissingFields", null);
                        return { success: true, message: "Тест успешно создан" };
                    })
                    .catch((err) => {
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
        setMissingFields(state, missingFields){
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
        cachedAccesses(state){
            return state.accesses;
        },
        cachedInfo(state){
            return state.info
        },
        cachedQuestions(state){
            return state.questions
        },
        missingFields(state) {
            return state.missingFields;
        },
    }
}
