import { createStore } from "vuex"
import test from "@/store/modules/Modal.js";

const store = createStore({
    modules: {
        test
    }
})

export default store;
