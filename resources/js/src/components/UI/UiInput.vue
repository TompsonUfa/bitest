<template>
    <div class="wrap-input">
        <span v-html="item.icon"></span>
        <input class="input" type="text" :placeholder="item.label">
    </div>
</template>

<script>
    export default {
        name: "UiInput",
        props: {
            item: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<style lang="scss">
    .wrap-input {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--main-color);
        font-size: 15px;
        span {
            position: absolute;
            left: 12px;
        }
        .input {
            width: 100%;
            background-color: inherit;
            outline: none;
            padding: 5px 5px 5px 40px;
            border: 1px solid var(--border-color);
            transition: .3s ease;
            color: inherit;
            letter-spacing: 1.1px;
            font-weight: 600;
            &:hover{
                border: 1px solid var(--border-color-two);
            }
            &:focus{
                border: 1px solid var(--border-color-two);
                background-color: var(--body-bg);
            }
        }
    }
</style>
