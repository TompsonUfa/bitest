<template>
    <div class="create-question">
        <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="form-check d-flex gap-2">
                            <input v-model="this.img" class="form-check-input" value="true" type="checkbox" id="checkImg">
                            <label class="form-check-label" for="checkImg">
                                Изображение
                            </label>
                        </div>
                        <ui-button class="btn-remove" v-if="selectedQuestion" :class="{'ui-button_disabled' : isFormInvalid}" @click="deleteQuestion">
                            Удалить вопрос
                        </ui-button>
                    </div>
                </div>
                <div v-if="this.img" class="mb-3">
                    <select-image class="m-auto select-img"></select-image>
                </div>
                <div class="mb-3">
                    <custom-input v-model:modelValue="name"
                                  :label="'Вопрос'" :type="'text'">
                    </custom-input>
                </div>
                <div class="mb-3">
                    <label class="form-label">{{this.competencies.label}}</label>
                    <custom-select :item="this.competencies"
                                   @select-item="(item) => {this.competencies.selected = item;}"></custom-select>
                </div>
                <div class="mb-3">
                    <label class="form-label">{{this.typesQuestion.label}}</label>
                    <custom-select :item="this.typesQuestion"
                                   @select-item="(item) => {this.typesQuestion.selected = item;}">
                    </custom-select>
                </div>
                <div v-if="typesQuestion.selected?.value !== 'open'">
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
                <ui-button v-if="typesQuestion.selected?.value === 'close'" @click="addOption">
                    Добавить вариант
                </ui-button>
                <ui-button v-if="selectedQuestion" :class="{'ui-button_disabled' : isFormInvalid}" @click="editQuestion">
                    Сохранить
                </ui-button>
                <ui-button v-else :class="{'ui-button_disabled' : isFormInvalid}" @click="addQuestion">
                    Добавить вопрос
                </ui-button>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from "vue";
 import SelectImage from "@/components/UI/SelectImage.vue";
 import CustomInput from "@/components/UI/CustomInput.vue";
 import CustomSelect from "@/components/UI/CustomSelect.vue";
 import UiButton from "@/components/UI/UiButton.vue";

 export default {
     name: "QuestionCreationForm",
     components: {UiButton, CustomSelect, CustomInput, SelectImage},
     props: {
         selectedQuestion: {
             type: Object,
             default: null,
         },
         QuestionsLength: {
             type: Number,
             default: 0,
         }
     },
     data(){
         return {
             id: ref(null),
             img: false,
             name: ref(null),
             options: [{name: '', correct: true},{name: '', correct: false}],
             competencies: {
                 label: 'Компетенция',
                 selected: ref(null),
                 options: [
                     {id: 1, name: "GR-222"},
                     {id: 2, name: "223-222"}
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
                    id: this.QuestionsLength === 0 ? 1 : this.QuestionsLength + 1,
                    name: this.name,
                    competence: this.competencies.selected,
                    typeQuestion: this.typesQuestion.selected,
                    options: this.options,
                };
                this.$emit('add-question', question);
                this.resetForm();
            }
         },
         editQuestion(){
             const question = {
                 id: this.id,
                 name: this.name,
                 competence: this.competencies.selected,
                 typeQuestion: this.typesQuestion.selected,
                 options: this.options,
             };
             this.$emit('edit-question', question);
             this.resetForm();
         },
         deleteQuestion(){
             this.$emit('delete-question', this.id);
             this.resetForm();
         },
         resetForm() {
             this.id = null;
             this.name = null;
             this.competencies.selected = null;
             this.typesQuestion.selected = null;
             this.options = [{ name: '', correct: true }, { name: '', correct: false }];
         },
     },
     computed: {
         isFormInvalid(){
             return (
                 !this.name ||
                 !this.competencies.selected ||
                 this.typesQuestion.selected.value === "close" && this.options.some(option => !option.name)||
                 this.typesQuestion.selected.value === "close" && !this.options.some(option => option.correct)
             );
         }
     },
     watch: {
         selectedQuestion(newValue){
             if (newValue !== null ){
                 this.id = newValue.id;
                 this.typesQuestion.selected = newValue.typeQuestion;
                 this.competencies.selected = newValue.competence;
                 this.name = newValue.name;
                 this.options = JSON.parse(JSON.stringify(newValue.options));
             } else {
                 this.resetForm();
             }
         }
     },
     emits: ["add-question", "edit-question", "delete-question"],
 }
</script>

<style scoped lang="scss">
    .create-question {
        .select-img {
            width: 100%;
            height: 300px;
        }
        .options {
            &__item {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 15px;
                margin-bottom: 20px;
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
        .btn-remove {
            font-size: 15px;
            cursor: pointer;
            border: 1px solid red;
            color: #fff;
            font-weight: 500;
            background-color: red;
            &:hover {
                color: var(--main-color);
                background-color: inherit;
            }
        }
    }
</style>
