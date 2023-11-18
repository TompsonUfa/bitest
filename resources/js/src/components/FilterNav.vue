<template>
    <div class="filters row justify-content-between align-items-center">
        <div class="col-3">

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
            input: {
                label: 'Поиск...',
                icon: '<i class="bi bi-search" data-v-8f3ed631=""></i>',
            }
        }
    },
}
</script>

<style lang="scss">
    .filters{
        &__search {
            .input {
                border-radius: 16px;
            }
        }
    }
</style>
