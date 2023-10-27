<template>
    <app-header/>
    <main class="main">
        <div class="container">
           <router-view></router-view>
        </div>
    </main>
    <modal-search v-if="this.modalSearch"></modal-search>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import ModalSearch from "@/components/ModalSearch.vue";
import {mapGetters} from "vuex";
export default {
    components: {
        AppHeader,
        ModalSearch
    },
    data(){
        return {

        }
    },
    computed:{
        ...mapGetters(['modalSearch']),
    }
}
</script>

<style lang="scss">

</style>
