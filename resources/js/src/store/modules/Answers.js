export default {
    actions: {
        selectAnswer(ctx, answer) {
            ctx.commit('selectAnswer', answer)
        }
    },
    mutations: {
        selectAnswer(state, answer) {
            state.answers = answer;
        }
    },
    state: {
        answers: [],
    },
    getters: {
        answers(state){
            return state.answers;
        },
    }
}
