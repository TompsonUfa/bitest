export default {
    actions: {
        selectQuestion(ctx, question) {
            ctx.commit('selectQuestion', question)
        }
    },
    mutations: {
        selectQuestion(state, question) {
            state.select = question;
        }
    },
    state: {
        questions: [
            {
                id: 1,
                name: 'Какая столица России?',
                several: false,
                open: false,
                options: [
                    {id: 1, name: 'Москва'},
                    {id: 2, name: 'Санкт-Петербург'},
                    {id: 3, name: 'Киев'},
                ]
            },
            {
                id: 2,
                name: 'Какое озеро считается самым глубоким в мире?' ,
                several: true,
                open: false,
                options: [
                    {id: 1, name: 'Байкал'},
                    {id: 2, name: 'Онтарио'},
                    {id: 3, name: 'Каспийское море'},
                ]
            },
            {
                id: 3,
                name: 'Какая страна находится на северном полюсе?' ,
                several: false,
                open: true,
            },
        ],
        select: {},
    },
    getters: {
        questions(state){
            return state.questions;
        },
        selectedQuestion(state){
            return state.select;
        }
    }
}
