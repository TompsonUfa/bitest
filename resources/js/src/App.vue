<template>
    <app-header/>
    <div>
        <div class="container">
           <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
    components: {
        AppHeader,
    },
    data(){
        return {
            username: "Роман",
        }
    }
}
</script>

<style lang="scss">

</style>
