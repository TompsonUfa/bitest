<template>
    <div class="create-question">
        <div class="row">
            <div class="col-12">
                <div class="mb-2">
                    <div class="form-check d-flex gap-2">
                        <input v-model="this.img" class="form-check-input" value="true" type="checkbox" id="checkImg">
                        <label class="form-check-label" for="checkImg">
                            Изображение
                        </label>
                    </div>
                </div>
                <div v-if="this.img" class="mb-2">
                    <select-image class="m-auto create-question__select-img"></select-image>
                </div>
                <div class="mb-2">
                    <custom-input v-model="name"
                                  :label="'Вопрос'" :type="'text'"></custom-input>
                </div>
                <div class="mb-2">
                    <label class="form-label">{{this.competencies.label}}</label>
                    <custom-select :item="this.competencies"
                                   @select-item="(item) => {this.competencies.selected = item;
                                       this.competence = item}"></custom-select>
                </div>
                <div class="mb-2">
                    <label class="form-label">{{this.typesQuestion.label}}</label>
                    <custom-select :item="this.typesQuestion"
                                   @select-item="(item) => {this.typesQuestion.selected = item; this.type = item.value}">

                    </custom-select>
                </div>
                <div v-if="type !== 'open'" class="mb-2">
                    <label class="form-label">Варианты ответов</label>
                    <div class="create-question__options options">
                        <div v-for="(option, index) in options" :key="index" class="options__item">
                            <input v-model="option.correct" class="form-check-input" type="checkbox">
                            <custom-input v-model="option.name" type="text"></custom-input>
                            <ui-button class="options__btn-delete"><i class="bi bi-x-lg"></i></ui-button>
                        </div>
                        <ui-button @click="addOption" class="options__btn-add">
                            Добавить вариант
                        </ui-button>
                    </div>
                </div>
            </div>
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
             img: false,
             name: ref(null),
             competence: ref(null),
             type: ref(null),
             options: [],
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
     },
     methods: {
         addOption(){
             const newOption = {
                 name: '',
                 correct: false,
             }
             this.options.push(newOption);
         }
     },
     mounted() {
         this.typesQuestion.selected = this.typesQuestion.options[0];
         this.competence = this.competencies.options[0].value;
         this.type = this.typesQuestion.options[0].value;
     }
 }
</script>

<style scoped lang="scss">
    .create-question {
        &__select-img {
            width: 100%;
            height: 200px;
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
