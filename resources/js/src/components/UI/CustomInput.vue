<template>
        <label v-if="this.label" :for="this.id" class="form-label">{{this.label}}</label>
        <input :tabindex="tabindex"
               @blur="$emit('input-edit', this.value)"
               v-model="this.value" :type="this.type"
               class="input form-control"
               :id="this.id">
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
            data: {
                type: String,
                required: false,
                default: '',
            },
            tabindex: {
                type: Number,
                required: false,
                default: 0,
            },
        },
        data(){
            return {
                value: '',
            }
        },
        mounted() {
            this.value = this.data;
        },
        emits: ["input-edit"],
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
