export default {
    actions: {
        updateInfo(ctx, info){
            ctx.commit('updateInfo', info);
        },
        updateQuestions(ctx, questions){
            ctx.commit('updateQuestions', questions)
        },
        createTest(ctx){
            const info = ctx.getters.cachedInfo;
            const questions  = ctx.getters.cachedQuestions;
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
                    info: info,
                    questions: questions,
                };
                ctx.commit("setMissingFields", null);
                return { success: true, message: "Тест успешно создан" };
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
        setMissingFields(state, missingFields){
            state.missingFields = missingFields;
        }
    },
    state: {
        info: null,
        questions: [],
        accessUsers: [],
        accessGroups: [],
        missingFields: [],
    },
    getters: {
        accessUsers(state){
            return state.accessUsers;
        },
        accessGroups(state){
            return state.accessGroups;
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
