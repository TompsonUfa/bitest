<template>
        <label v-if="label" :for="id" class="form-label">{{label}}</label>
        <input :tabindex="tabindex"
               @input="updateValue"
               v-model="value" :type="type"
               class="input form-control"
               :id="id">
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
                required: false,
            },
            value: {
                type: [String, Number],
                default: '',
            },
            tabindex: {
                type: Number,
                required: false,
                default: 0,
            },
        },
        methods: {
            updateValue(event) {
                this.$emit('input', event.target.value);
            },
        },
        emits: ["input"],
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
