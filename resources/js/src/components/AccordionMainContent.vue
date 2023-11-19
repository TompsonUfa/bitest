<template>
    <div class="row">
        <div class="col-4">
            <select-image class="accordion-menu__select-img"></select-image>
        </div>
        <div class="col-8">
            <div class="mb-2">
                <CustomInput  @input-edit="(value) => this.name = value" :data="this.name" :label="'Название'" :type="'text'" :id="'exampleInputName'"></CustomInput>
            </div>
            <div class="mb-2">
                <label class="form-label">{{this.direction.label}}</label>
                <custom-select :item="this.direction" @select-item="(item) => this.direction.selected = item"></custom-select>
            </div>
            <div class="mb-2">
                <label class="form-label">{{this.discipline.label}}</label>
                <custom-select :item="this.discipline" @select-item="(item) => this.discipline.selected = item"></custom-select>
            </div>
            <div class="mb-2">
                <label class="form-label">{{this.time.label}}</label>
                <custom-select :item="this.time" @select-item="(item) => this.time.selected = item"></custom-select>
            </div>
            <div class="mb-2">
                <label class="form-label">{{this.attempts.label}}</label>
                <custom-select :item="this.attempts" @select-item="(item) => this.attempts.selected = item"></custom-select>
            </div>
            <div class="mb-4">
                <label class="form-label">{{this.displayQuestions.label}}</label>
                <custom-select :item="this.displayQuestions" @select-item="(item) => this.displayQuestions.selected = item"></custom-select>
            </div>
            <div class="form-check d-flex gap-2 justify-content-end">
                <input class="form-check-input" type="checkbox" value="" id="checkPublish">
                <label class="form-check-label" for="checkPublish">
                    Опубликовать
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    import CustomInput from "@/components/UI/CustomInput.vue";
    import SelectImage from "@/components/UI/SelectImage.vue";
    import CustomSelect from "@/components/UI/CustomSelect.vue";
    import {ref} from "vue";

    export default {
        name: "AccordionMainContent",
        components: {CustomSelect, SelectImage, CustomInput},
        data(){
            return {
                img: ref(null),
                name: '',
                direction: {
                    label: "Направление",
                    options: [
                        {id: 1, name: 'Значение с бд'},
                    ],
                    selected: ref(null),
                },
                discipline: {
                    label: "Дисциплина",
                    selected: ref(null),
                    options: [
                        {id: 1, name: 'Значение с бд'},
                        {id: 2, name: 'Значение с бд'},
                    ]
                },
                time: {
                    label: "Время на выполнение",
                    selected: ref(null),
                    options: [
                        {id: 1, name: 'Неограниченно'},
                        {id: 2, name: '15 минут', value: "15"},
                        {id: 3, name: '30 минут', value: "30"},
                        {id: 4, name: '1 час', value: "60"},
                        {id: 5, name: '2 час', value: "120"},
                    ]
                },
                attempts: {
                    label: "Количество попыток",
                    selected: ref(null),
                    options: [
                        {id: 1, name: 'Неограниченно'},
                        {id: 2, name: '1 попытка', value: "1"},
                        {id: 3, name: '2 попытки', value: "2"},
                        {id: 4, name: '3 попытки', value: "3"},
                    ]
                },
                displayQuestions: {
                    label: "Отображение вопросов",
                    selected: ref(null),
                    options: [
                        {id: 1, name: 'Все'},
                        {id: 2, name: '10 вопросов', value: "10"},
                        {id: 3, name: '20 вопросов', value: "20"},
                        {id: 4, name: '30 вопросов', value: "30"},
                    ]
                },
            }
        }
    }
</script>

<style lang="scss">

</style>
