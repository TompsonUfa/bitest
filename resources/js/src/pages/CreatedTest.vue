<template>
    <div class="row">
        <div class="col-12 mb-3">
            <table-tests></table-tests>
        </div>
        <div class="col-12">
            <router-link to="/created-tests/create">Создать</router-link>
        </div>
    </div>
</template>

<script>
    import TableTests from "@/components/TableTests.vue";
    import UiButton from "@/components/UI/UiButton.vue";

    export default {
        name: "CreatedTest",
        components: {UiButton, TableTests},
    }
</script>

<style scoped lang="scss">

</style>
