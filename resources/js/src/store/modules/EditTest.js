import router from "../../router/router.js";

export default {
    actions: {
        updateInfoForEdit(ctx, info) {
            ctx.commit('updateInfo', info);
        },
        updateQuestionsForEdit(ctx, questions) {
            ctx.commit('updateQuestions', questions)
        },
        updateAccessesForEdit(ctx, accesses) {
            ctx.commit('updateAccesses', accesses)
        },
        // createTest(ctx) {
        //     const info = ctx.getters.cachedInfo;
        //     const questions = ctx.getters.cachedQuestions;
        //     const accesses = ctx.getters.cachedAccesses;
        //     const userId = ctx.getters.user.id;
        //     const missingFields = [];
        //
        //     if (!info || !info.title) {
        //         missingFields.push("Заполните название теста");
        //     }
        //
        //     if (questions.length === 0) {
        //         missingFields.push("Заполните вопросы для теста");
        //     }
        //
        //     if (missingFields.length > 0) {
        //         ctx.commit("setMissingFields", missingFields);
        //         return {success: false, message: "Не все поля заполнены"};
        //     }
        //
        //     const test = {
        //         title: info.title,
        //         image: info.image,
        //         timeComplete: info.timeComplete.value,
        //         attempts: info.attempts.value,
        //         limitQuestions: info.limitQuestions.value,
        //         published: info.published,
        //         userId: userId,
        //     };
        //
        //     axios.post('/api/moder/tests',
        //         {
        //             'info': test,
        //             'questions': questions,
        //             'accesses': accesses
        //         }).then((res) => {
        //         ctx.commit("setMissingFields", null);
        //         ctx.commit("clearStateTest");
        //         router.push({name: 'created-tests'});
        //     }).catch((err) => {
        //         console.log(err)
        //     })
        // }
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
        },
        clearStateTest(state) {
            state.info = null;
            state.questions = [];
            state.accesses = [];
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
