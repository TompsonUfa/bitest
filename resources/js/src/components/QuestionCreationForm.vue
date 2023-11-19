<template>
    <div class="create-question row">
        <div class="col-6">
            <div class="mb-2">
                <custom-input :label="'Вопрос'" :type="'text'"></custom-input>
            </div>
            <div class="mb-2">
                <label class="form-label">{{this.competencies.label}}</label>
                <custom-select :item="this.competencies" @select-item="(item) => this.competencies.selected = item"></custom-select>
            </div>
            <div class="mb-2">
                <label class="form-label">{{this.typesQuestion.label}}</label>
                <custom-select :item="this.typesQuestion" @select-item="(item) => this.typesQuestion.selected = item"></custom-select>
            </div>
            <div class="mb-2">
                <label class="form-label">Варианты ответов</label>
                <div class="create-question__options options">
                    <div class="options__item">
                        <input class="form-check-input" type="checkbox">
                        <custom-input type="text"></custom-input>
                        <ui-button class="options__btn-delete"><i class="bi bi-x-lg"></i></ui-button>
                    </div>
                </div>
            </div>

        </div>
        <div class="col-6">
            <select-image class="create-question__select-img"></select-image>
        </div>
    </div>
</template>

<script>
 import SelectImage from "@/components/UI/SelectImage.vue";
 import CustomInput from "@/components/UI/CustomInput.vue";
 import CustomSelect from "@/components/UI/CustomSelect.vue";
 import {ref} from "vue";
 import UiButton from "@/components/UI/UiButton.vue";

 export default {
     name: "QuestionCreationForm",
     components: {UiButton, CustomSelect, CustomInput, SelectImage},
     data(){
         return {
             question: {
                 name: '',
                 competence: '',
                 type: '',
                 options: [],
             },
             competencies: {
                 label: 'Компетенция',
                 selected: ref(null),
                 options: [
                     {id: 1, name: "GR-222"}
                 ]
             },
             typesQuestion: {
                 label: 'Тип ответа',
                 selected: ref(null),
                 options: [
                     {id: 1, name: "Один ответ", value: "radio"},
                     {id: 2, name: "Несколько ответов", value: "checkbox"},
                     {id: 3, name: "Открытый ответ", value: "open"},
                 ]
             }
         }
     }
 }
</script>

<style scoped lang="scss">
    .create-question {
        &__select-img {
            width: 100%;
            height: 100%;
            max-height: 400px;
        }
        .options {
            &__item {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 15px;
                margin-bottom: 15px;
            }
            &__btn-delete {
                border-radius: 8px;
                width: 35px;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #dc3545;
                opacity: 0.6;
                &:hover {
                    opacity: 1;
                }
            }
        }
    }
</style>
