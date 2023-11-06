export default {
    actions: {
        userResponses(ctx, test){
           const userData = localStorage.getItem(test.toString());
           if (userData) {
               ctx.commit('updateArrayAnswers', JSON.parse(userData));
           }
        },
        addAnswer(ctx, [questionId, openAnswer, selectedAnswers]) {
            const newObj = {
                questionId: questionId,
                openAnswer: openAnswer,
                selectedAnswers: selectedAnswers,
            };
            ctx.commit('addAnswer', newObj);
        },
        updateAnswer(ctx, [index, selectedAnswers, openAnswer],) {
            ctx.commit('updateAnswer', [index, selectedAnswers, openAnswer]);
        },
        deleteAnswer(ctx, index){
            ctx.commit('deleteAnswer', index);
        }
    },
    mutations: {
        addAnswer(state, answer) {
            state.answers.push(answer)
        },
        updateAnswer(state, [index, selectedAnswers, openAnswer]){
            state.answers[index].selectedAnswers = selectedAnswers;
            state.answers[index].openAnswer = openAnswer;
        },
        deleteAnswer(state, index){
            state.answers.splice(index, 1);
        },
        updateArrayAnswers(state, data){
            state.answers = data;
        }
    },
    state: {
        answers: [],
    },
    getters: {
        getAnswersById: (state) => (id) => {
            return state.answers.find(answer => answer.questionId === id)
        },
        getAnswerIndexById: (state) => (id) => {
            return state.answers.findIndex(answer => answer.questionId === id)
        },
        answers(state){
            return state.answers;
        },
    }
}
