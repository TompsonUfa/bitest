<template>
    <div class="test">
        <accordion-menu :event="'edit'"></accordion-menu>
    </div>
</template>

<script>
import AccordionMenu from "@/components/AccordionMenu.vue";
    export default {
        name: "EditView",
        components: {
            AccordionMenu,
        }
    }
</script>

<style scoped lang="scss">

</style>
