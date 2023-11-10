import { createStore } from "vuex"
import Auth from "@/store/modules/Auth.js";
import modal from "@/store/modules/Modal.js";
import test from "@/store/modules/Test.js";
import questions from "@/store/modules/Questions.js";
import answers from "@/store/modules/Answers.js";
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    plugins:[
        createPersistedState({paths: ['Auth']})
    ],
    modules: {
        Auth,
        modal,
        test,
        questions,
        answers
    }
})

export default store;
