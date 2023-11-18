<template>
    <div class="select">
        <div @click="$emit('toggle-focus')" class="select__header" :class="item.focus ? 'select__header_active' : ''">
            <span>{{item.selected.name}}</span>
            <i class="bi bi-chevron-down"></i>
        </div>
        <div v-if=item.focus class="select__menu">
            <div class="select__item"
                 :class="item.selected === option ? 'select__item_active' : null "
                 @click="$emit('select', option); $emit('toggle-focus')"
                 v-for="option in item.options" :key="option.id">
                {{option.name}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomSelect",
        props: {
            item: {
                type: Object,
                required: true,
            }
        },
        mounted() {
                this.$emit('select', this.item.options[0]);
            },
        emits: ['toggle-focus', 'select']
    }
</script>

<style scoped lang="scss">
    .select{
    position: relative;
    cursor: pointer;
    color: var(--main-color);
    height: 38px;
    font-size: 14px;
    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 15px;
        border: 1px solid var(--border-color);
        font-weight: 600;
        transition: all .3s ease;
        background-color: var(--body-bg);
        border-radius: 8px;
        span, i {
            transition: inherit;
        }
        &:hover{
            border: 1px solid var( --border-color-two);
        }
        &_active {
            border: 1px solid var( --border-color-two);
            i {
                transform: rotate(180deg);
            }
        }
    }
    &__menu {
        position: absolute;
        top: 45px;
        left: 0;
        z-index: 3;
        width: 100%;
        border-radius: 16px;
        background-color: var(--body-bg);
        padding: 10px;
        border: 1px solid var(--border-color);
    }
    &__item {
        padding: 10px;
        border-radius: 8px;
        font-weight: 600;
        margin-bottom: 5px;
        &:hover, &_active{
            background-color: var(--button-bg);
        }
    }
}
</style>
