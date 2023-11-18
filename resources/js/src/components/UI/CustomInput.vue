<template>
    <div class="mb-2">
        <label v-if="this.label" :for="this.id" class="form-label">{{this.label}}</label>
        <input :type="this.type" class="input form-control" :id="this.id">
    </div>
</template>

<script>
    export default {
        name: "CustomInput",
        props: {
            label: {
                type: String,
            },
            type: {
                type: String,
                required: true,
            },
            id: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style scoped lang="scss">
    .input {
        font-size: 14px;
        font-weight: 600;
        color: var(--main-color);
        background-color: var(--body-bg);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        &:hover, &:focus {
            border: 1px solid var( --border-color-two);
            box-shadow: none;
        }
    }
</style>
