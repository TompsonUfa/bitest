<template>
    <div class="filters row">
        <div class="col">
        </div>
        <div class="col col-lg-2">
            <filter-select></filter-select>
        </div>
    </div>
</template>

<script>
import FilterSelect from "@/components/FilterSelect.vue";
export default {
    name: 'FilterNav',
    components: {
        FilterSelect
    },
    data(){
        return {

        }
    },
    methods: {

    },
}
</script>

<style scoped lang="scss">
    .filters{

    }
</style>
