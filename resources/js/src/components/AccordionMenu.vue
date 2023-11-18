<template>
    <div class="accordion-menu">
        <div class="accordion-menu__header">
            <ui-button :class="this.selected === filter ? 'accordion-menu__btn_active' : null"
                       class="accordion-menu__btn" v-for="filter in filters" :key="filter.id"
                       @click="this.selected = filter">{{ filter.name }}</ui-button>
        </div>
        <div class="accordion-menu__content" v-if="this.selected">
            <template v-if="this.selected.value === 'data'">
                <CustomInput :label="'Название'" :type="'text'" :id="'exampleInputName'"></CustomInput>
                <div class="mb-2">
                     <label class="form-label mb-2">{{this.selectDirection.label}}</label>
                    <CustomSelect @select="(item) => this.selectDirection.selected = item"
                                  @toggle-focus="this.selectDirection.focus = !this.selectDirection.focus" :item = this.selectDirection>
                    </CustomSelect>
                </div>
                <div class="mb-2">
                    <label class="form-label mb-2">{{this.selectDiscipline.label}}</label>
                    <CustomSelect @select="(item) => this.selectDiscipline.selected = item"
                                  @toggle-focus="this.selectDiscipline.focus = !this.selectDiscipline.focus" :item = this.selectDiscipline>
                    </CustomSelect>
                </div>
                <div class="mb-2">
                    <label class="form-label mb-2">{{this.selectTime.label}}</label>
                    <CustomSelect @select="(item) => this.selectTime.selected = item"
                                  @toggle-focus="this.selectTime.focus = !this.selectTime.focus" :item = this.selectTime>
                    </CustomSelect>
                </div>
                <div class="mb-2">
                    <label class="form-label mb-2">{{this.selectAttempts.label}}</label>
                    <CustomSelect @select="(item) => this.selectAttempts.selected = item"
                                  @toggle-focus="this.selectAttempts.focus = !this.selectAttempts.focus" :item = this.selectAttempts>
                    </CustomSelect>
                </div>
                <div class="mb-2">
                    <label class="form-label mb-2">{{this.selectDisplayQuestions.label}}</label>
                    <CustomSelect @select="(item) => this.selectDisplayQuestions.selected = item"
                                  @toggle-focus="this.selectDisplayQuestions.focus = !this.selectDisplayQuestions.focus" :item = this.selectDisplayQuestions>
                    </CustomSelect>
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
            <template v-if="this.selected.value === 'questions'">
                Вопросы
            </template>
            <template v-if="this.selected.value === 'access'">
                Доступ
            </template>
        </div>
    </div>
</template>

<script>
import UiButton from "@/components/UI/UiButton.vue";
import CustomInput from "@/components/UI/CustomInput.vue";
import CustomSelect from "@/components/UI/CustomSelect.vue";

export default {
    name: "AccordionMenu",
    components: {CustomSelect, CustomInput, UiButton},
    data(){
        return {
            filters: [
                {id: 1, name: 'Основное', value: 'data'},
                {id: 2, name: 'Вопросы', value: 'questions'},
                {id: 3, name: 'Доступ', value: 'access'},
            ],
            selected: null,
            selectDirection: {
                label: "Направление",
                selected: "",
                focus: false,
                options: [
                    {id: 1, name: 'Значение с бд'},
                ]
            },
            selectDiscipline: {
                label: "Дисциплина",
                selected: "",
                focus: false,
                options: [
                    {id: 1, name: 'Значение с бд'},
                ]
            },
            selectTime: {
                label: "Время на выполнение",
                selected: "",
                focus: false,
                options: [
                    {id: 1, name: 'Неограниченно'},
                    {id: 2, name: '15 минут', value: "15"},
                    {id: 3, name: '30 минут', value: "30"},
                    {id: 4, name: '1 час', value: "60"},
                    {id: 5, name: '2 час', value: "120"},
                ]
            },
            selectAttempts: {
                label: "Количество попыток",
                selected: "",
                focus: false,
                options: [
                    {id: 1, name: 'Неограниченно'},
                    {id: 2, name: '1 попытка', value: "1"},
                    {id: 3, name: '2 попытки', value: "2"},
                    {id: 4, name: '3 попытки', value: "3"},
                ]
            },
            selectDisplayQuestions: {
                label: "Отображение вопросов",
                selected: "",
                focus: false,
                options: [
                    {id: 1, name: 'Все'},
                    {id: 2, name: '10 вопросов', value: "10"},
                    {id: 3, name: '20 вопросов', value: "20"},
                    {id: 4, name: '30 вопросов', value: "30"},
                ]
            }
        }
    },
    mounted() {
        this.selected = this.filters[0];
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
        &__btn {
            background-color: inherit;
            border: 1px solid var(--border-color);
            color: var(--main-color);
            font-weight: 600;
            &:hover, &_active {
                background-color: var(--brand-color);
                color: #fff;
                border: 1px solid transparent;
            }
        }
    }
</style>
