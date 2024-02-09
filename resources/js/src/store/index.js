import { createStore } from "vuex"
import auth from "@/store/modules/Auth.js";
import modal from "@/store/modules/Modal.js";
import test from "@/store/modules/Test.js";
import questions from "@/store/modules/Questions.js";
import answers from "@/store/modules/Answers.js";
import createTest from "@/store/modules/CreateTest.js";
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
    plugins:[
        createPersistedState({paths: ['auth', 'createTest']})
    ],
    modules: {
        auth,
        modal,
        test,
        questions,
        answers,
        createTest,
    }
})

export default store;
