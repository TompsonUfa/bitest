<template>
    <div class="accordion-menu">
        <div class="accordion-menu__header">
            <ui-button @click="loadData('data')">Основное</ui-button>
            <ui-button @click="loadData('data')">Вопросы</ui-button>
            <ui-button @click="loadData('access')">Доступ</ui-button>
        </div>
        <div class="accordion-menu__content">
            <template v-if="selected === 'data' || selected === null">
                <div class="mb-2">
                    <label for="exampleInputName" class="form-label">Название</label>
                    <input type="text" class="form-control" id="exampleInputName">
                </div>
                <div class="mb-2">
                    <label for="exampleInputDirection" class="form-label">Направление</label>
                    <input type="text" class="form-control" id="exampleInputDirection">
                </div>
                <div class="mb-2">
                    <label for="selectTime" class="form-label">Время на выполнение</label>
                    <select class="form-select" id="selectTime">
                        <option selected>Неограниченно</option>
                        <option value="15">15 минут</option>
                        <option value="30">30 минут</option>
                        <option value="60">1 час</option>
                        <option value="120">2 часа</option>
                    </select>
                </div>
                <div class="mb-2">
                    <label for="selectAttempts" class="form-label">Количество попыток</label>
                    <select class="form-select" id="selectAttempts">
                        <option selected>Неограниченно</option>
                        <option value="1">1 попытка</option>
                        <option value="2">2 попытки</option>
                        <option value="3">3 попытки</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="selectDisplayQuestions" class="form-label">Отображение вопросов</label>
                    <select class="form-select" id="selectDisplayQuestions">
                        <option selected>Все</option>
                        <option value="10">10 вопросов</option>
                        <option value="20">20 вопросов</option>
                        <option value="30">30 вопросов</option>
                    </select>
                </div>
                <div>
                    <div class="form-check d-flex gap-2 justify-content-end">
                        <input class="form-check-input" type="checkbox" value="" id="checkPublish">
                        <label class="form-check-label" for="checkPublish">
                            Опубликовать
                        </label>
                    </div>
                </div>
            </template>
            <template v-else>
                пользователи
            </template>
        </div>
    </div>
</template>

<script>
import UiButton from "@/components/UI/UiButton.vue";

export default {
    name: "AccordionMenu",
    components: {UiButton},
    data(){
        return {
            selected: null,
        }
    },
    methods: {
        loadData(item){
            this.selected = item;
        }
    }
}
</script>

<style scoped lang="scss">
    .accordion-menu {
        &__header {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }
    }
</style>
