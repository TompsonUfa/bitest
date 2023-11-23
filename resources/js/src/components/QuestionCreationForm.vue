<template>
    <div class="create-question">
        <div class="row">
            <div class="col-12 mb-3">
                <div class="mb-3">
                    <div class="form-check d-flex gap-2">
                        <input v-model="this.img" class="form-check-input" value="true" type="checkbox" id="checkImg">
                        <label class="form-check-label" for="checkImg">
                            Изображение
                        </label>
                    </div>
                </div>
                <div v-if="this.img" class="mb-3">
                    <select-image class="m-auto create-question__select-img"></select-image>
                </div>
                <div class="mb-3">
                    <custom-input v-model:modelValue="name"
                                  :label="'Вопрос'" :type="'text'"></custom-input>
                </div>
                <div class="mb-3">
                    <label class="form-label">{{this.competencies.label}}</label>
                    <custom-select :item="this.competencies"
                                   @select-item="(item) => {this.competencies.selected = item;
                                       this.competence = item}"></custom-select>
                </div>
                <div class="mb-3">
                    <label class="form-label">{{this.typesQuestion.label}}</label>
                    <custom-select :item="this.typesQuestion"
                                   @select-item="(item) => {this.typesQuestion.selected = item; this.type = item.value}">
                    </custom-select>
                </div>
                <div v-if="this.type !== 'open'">
                    <label class="form-label">Варианты ответов</label>
                    <div class="create-question__options options">
                        <div v-for="(option, index) in options" :key="index" class="options__item">
                            <input :id="'option-' + (index+1)" v-model="option.correct" name="option" class="form-check-input" type="checkbox">
                            <custom-input v-model:modelValue="option.name" type="text"></custom-input>
                            <ui-button v-if="index > 1" @click="deleteOption(index)" class="options__btn-delete"><i class="bi bi-x-lg"></i></ui-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 d-flex justify-content-between">
                <ui-button @click="addOption">
                    Добавить вариант
                </ui-button>
                <ui-button :class="{'ui-button_disabled' : isFormInvalid}" disabled @click="addQuestion">
                    Добавить вопрос
                </ui-button>
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
             options: [{name: '', correct: true},{name: '', correct: false}],
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
                     {id: 1, name: "Закрытый ответ", value: "close"},
                     {id: 2, name: "Открытый ответ", value: "open"},
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
         },
         deleteOption(index){
             if (this.options.length > 1){
                 this.options.splice(index,1)
             }
         },
         addQuestion(){
            if (!this.isFormInvalid){
                const question = {
                    name: this.name,
                    competence: this.competence,
                    type: this.type,
                    options: this.options,
                };
                this.$emit('add-question', question);
                this.name = null;
                this.options = [{name: '', correct: true},{name: '', correct: false}];
            }
         },
     },
     computed: {
         isFormInvalid(){
             return (
                 !this.name ||
                 !this.competence ||
                 this.type === "close" && this.options.some(option => !option.name)||
                 this.type === "close" && !this.options.some(option => option.correct)
             );
         }
     },
     watch: {
       type(newValue){
           if (newValue === "open"){
               this.options = [];
           }
           if (newValue === "close"){
               this.options = [{name: '', correct: true},{name: '', correct: false}];
           }
       }
     },
     mounted() {
         this.typesQuestion.selected = this.typesQuestion.options[0];
         this.competence = this.competencies.options[0].name;
         this.type = this.typesQuestion.options[0].value;
     },
     emits: ["add-question"],
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
            &__item:last-child{
                margin-bottom: 0;
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
