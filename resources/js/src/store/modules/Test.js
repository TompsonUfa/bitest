export default {
    actions: {

    },
    mutations: {

    },
    state: {
        test : {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
                "Assumenda consequatur cum, cupiditate eos id ipsa iste maiores molestias " +
                "nemo nihil officia pariatur quaerat qui repellat rerum vel vero voluptatem. Facilis?",
            attempts: "2",
            time: 60,
        }
    },
    getters: {
        test(state){
            return state.test;
        }
    }
}
