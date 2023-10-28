<template>
    <header class="header">
        <div class="container">
            <nav class="navbar p-0 justify-content-between">
                <router-link class="navbar-brand" to="/">bitest</router-link>
                <div class="d-flex align-items-center gap-2">
                    <div @click="this.toggleModal('search')" class="header__search">
                        <i class="bi bi-search"></i>
                    </div>
                    <profile-nav></profile-nav>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
import ProfileNav from "@/components/ProfileNav.vue";
import {mapActions} from "vuex";
export default {
    name: "AppHeader",
    components: {
        ProfileNav,
    },
    methods: {
        ...mapActions(['toggleModal']),
    }
}
</script>

<style scoped lang="scss">
    .header {
        height: var(--header-height);
        border-bottom: 1px solid #f5f5f5;
        .navbar-brand{
            text-transform: uppercase;
            letter-spacing: 1.2px;
        }
        &__search {
            cursor: pointer;
        }
    }
</style>
