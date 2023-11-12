<template>
    <div class="select">
        <div @click="this.focus = !this.focus" class="select__header" :class="this.focus ? 'select__header_active' : ''">
            <span>{{this.selected.name}}</span>
            <i class="bi bi-chevron-down"></i>
        </div>
        <div v-if=this.focus class="select__menu">
            <div @click="this.selected = filter; this.focus = !this.focus"
                 class="select__item" :class="this.selected.id === filter.id ? 'select__item_active' : ''"
                 v-for="filter in filters" :key="filter.id">
                {{filter.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FilterSelect',
    data(){
        return {
            focus: false,
            selected: '',
            filters: [
                {id: 1, name: 'Новые', value: 'date'},
                {id: 2, name: 'Категория', value: 'category'},
                {id: 3, name: 'Тест', value: 'test'},
                {id: 4, name: 'Автор', value: 'author'},
            ]
        }
    },
    mounted() {
      this.selected = this.filters[0];
    }
}
</script>

<style scoped lang="scss">
    .select{
        position: relative;
        cursor: pointer;
        border-radius: 5px;
        color: var(--main-color);
        height: 38px;
        font-size: 15px;
        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 15px;
            border-radius: 16px;
            border: 1px solid var(--border-color);
            font-weight: 600;
            transition: all .3s ease;
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
