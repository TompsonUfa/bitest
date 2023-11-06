<template>
    <div class="row">
        <div class="col-12">
            <app-breadcrumbs></app-breadcrumbs>
        </div>
        <div class="col-12">
            <router-view></router-view>
        </div>
    </div>

</template>

<script>
import AppBreadcrumbs from "@/components/AppBreadcrumb.vue";
import {mapGetters} from "vuex";
export default {
    name: "Test",
    components: {
        AppBreadcrumbs
    },
}
</script>

<style scoped lang="scss">

</style>
