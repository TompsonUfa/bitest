import { createStore } from "vuex"
import modal from "@/store/modules/Modal.js";
import test from "@/store/modules/Test.js";
import questions from "@/store/modules/Questions.js";
import answers from "@/store/modules/Answers.js";

const store = createStore({
    modules: {
        modal,
        test,
        questions,
        answers
    }
})

export default store;
