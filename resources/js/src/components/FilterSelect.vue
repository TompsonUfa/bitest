<template>
    <div class="select">
        <div @click="this.focus = !this.focus" class="select__header"><span>{{this.selected.name ?? 'Сортировка'}}</span> <i class="bi bi-chevron-down"></i></div>
        <div v-if=this.focus class="select__menu">
            <div @click="this.selected = filter; this.focus = !this.focus" class="select__item" v-for="filter in filters" :key="filter.id">{{filter.name}}</div>
            <div @click="this.selected = ''; this.focus = !this.focus" class="select__item">Очистить</div>
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
                {id: 1, name: 'Категория', value: 'category'},
                {id: 2, name: 'Тест', value: 'test'},
                {id: 3, name: 'Автор', value: 'author'},
                {id: 4, name: 'Дата', value: 'date'},
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .select{
        position: relative;
        cursor: pointer;
        height: 35px;
        border: 1px solid var(--border-color);
        border-radius: 5px;
        color: var(--main-color);
        background-color: var(--button-bg);
        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 10px;
        }
        &__menu {
            position: absolute;
            top: 40px;
            left: 0;
            z-index: 3;
            width: 100%;
            border: 1px solid var(--border-color);
            border-radius: 5px;
            background-color: var(--button-bg);
        }
        &__item {
            padding: 10px;
            &:hover{
                background-color: var(--button-bg-second);
            }
        }
    }
</style>
