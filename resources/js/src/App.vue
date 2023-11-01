<template>
    <app-header :dark="this.dark" @change-theme="changeTheme"/>
    <main class="main">
        <div class="container">
           <router-view></router-view>
        </div>
    </main>
    <modal-search v-if="modalSearch"></modal-search>
    <app-loader v-if="this.loader"></app-loader>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import ModalSearch from "@/components/ModalSearch.vue";
import AppLoader from "@/components/AppLoader.vue";

import {mapGetters} from "vuex";
export default {
    components: {
        AppHeader,
        ModalSearch,
        AppLoader

    },
    data(){
        return {
            dark: false,
            loader: false,
        }
    },
    computed:{
        ...mapGetters(['modalSearch']),
    },
    mounted() {
        const initUserTheme = this.getTheme() || this.getMediaPreference();
        this.dark = initUserTheme;
        this.setTheme(initUserTheme);
    },
    methods: {
        setTheme(theme) {
            localStorage.setItem("theme-mode", theme);
            if (theme === "dark") {
                this.dark = true;
                document.body.classList.add("dark");
            } else {
                this.dark = false;
                document.body.classList.remove("dark");
            }
        },
        changeTheme() {
            if (this.dark === true) {
                this.setTheme("light");
            } else {
                this.setTheme("dark");
            }
        },
        getMediaPreference() {
            const hasDarkPreference = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            if (hasDarkPreference) {
                return "dark";
            } else {
                return "light";
            }
        },
        getTheme() {
            return localStorage.getItem("theme-mode");
        },
    },
    created() {
        this.$router.beforeResolve((to, from, next) => {
            this.loader = true;
            next();
        })
        this.$router.afterEach((to, from) => {
            setTimeout(() =>  this.loader = false, 1000);
        })
    }
}
</script>

<style lang="scss">
    .main {
        height: 100%;
        min-height: 100vh;
        padding-top: 55px;
        background-color: var(--body-bg);
    }
</style>
