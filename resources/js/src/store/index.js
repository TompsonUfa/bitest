import { createStore } from "vuex"
import test from "@/store/modules/test.js";

const store = createStore({
    modules: {
        test
    }
})

export default store;
