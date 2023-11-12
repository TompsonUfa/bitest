<template>
    <div class="cards row g-4">
        <div class="col-12 col-lg-4">
            <card-item class="cards__item"></card-item>
        </div>
        <div class="col-12 col-lg-4">
            <card-item class="cards__item"></card-item>
        </div>
        <div class="col-12 col-lg-4">
            <card-item class="cards__item"></card-item>
        </div>
        <div class="col-12 col-lg-4">
            <card-item class="cards__item"></card-item>
        </div>
        <div class="col-12 col-lg-4">
            <card-item class="cards__item"></card-item>
        </div>
        <div class="col-12 col-lg-4">
            <card-item class="cards__item"></card-item>
        </div>
    </div>
</template>

<script>
import CardItem from "@/components/CardItem.vue";
export default {
    name: 'CardList',
    components: {
        CardItem,
    }
}
</script>

<style scoped lang="scss">

</style>
