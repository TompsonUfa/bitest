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
                name: 'Кто изображен на картинке?' ,
                several: true,
                open: false,
                img: '/storage/images/test.jpeg',
                options: [
                    {id: 1, name: 'Капитан Прайс'},
                    {id: 2, name: 'Саймон Райли'},
                    {id: 3, name: 'Шепард предатель'},
                ]
            },
            {
                id: 3,
                name: 'Кто изображен на картинке?',
                several: false,
                open: true,
                img: '/storage/images/test.jpeg',
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
