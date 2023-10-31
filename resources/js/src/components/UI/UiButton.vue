<template>
    <div class="btn ui-button">
        <slot></slot>
    </div>
</template>

<script >
 export default {
     name: "UiButton",
 }
</script>

<style scoped lang="scss">
    .ui-button{
        color: #fff;
        background-color: var(--brand-color);
        transition: all 0.2s ease;
        &:hover {
            background-color: #000;
        }
    }
</style>
