<template>
    <div class="content">
        <div class="row my-3">
            <div class="col-12">
                <filter-nav></filter-nav>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <card-list></card-list>
            </div>
        </div>
    </div>
</template>

<script>
import filterNav from "@/components/FilterNav.vue";
import CardList from "@/components/CardList.vue";
export default {
    name: "Home",
    components: {
        CardList,
        filterNav
    }
}
</script>

<style scoped lang="scss">

</style>
