<template>
    <div class="options">
        <div v-if="!this.selectedQuestion.open"
             v-for="option in selectedQuestion.options"
             :key="option.id" class="options__item">
            <div class="form-check">
                <input v-if="selectedQuestion.several"
                       v-model="this.selectedAnswers" name="option" type="checkbox"
                       :value="option.id" class="form-check-input options__check-input"
                       :id="'option-' + option.id">
                <input v-if="!selectedQuestion.several"
                       v-model="this.selectedAnswers" name="option" type="radio"
                       :value="option.id" class="form-check-input options__check-input"
                       :id="'option-' + option.id">
                <label class="form-check-label" :for="'option-' + option.id">
                    {{option.name}}
                </label>
            </div>
        </div>
        <div v-if="this.selectedQuestion.open" class="options__item">
            <input type="text" class="form-control options__input" @input="this.updateCommonAnswers()" v-model="this.openAnswer">
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

 export default {
     name: "QuestionOptions",
     data(){
         return {
             openAnswer: '',
             selectedAnswers: [],
         }
     },
     computed:{
       ...mapGetters(['test', 'selectedQuestion', 'getAnswersById', 'getAnswerIndexById', 'answers']),
     },
     watch: {
         selectedQuestion: {
             handler: function(newQuestion) {
                 const answerUser = this.getAnswersById(newQuestion.id);
                 if (typeof answerUser === 'object'){
                     this.openAnswer = answerUser.openAnswer;
                     this.selectedAnswers = answerUser.selectedAnswers;
                 } else {
                     this.openAnswer = '';
                     this.selectedAnswers = [];
                 }
             },
             immediate: true,
         },
         selectedAnswers(newValue) {
             this.updateCommonAnswers();
         },
     },
     methods: {
       ...mapActions(['addAnswer', 'updateAnswer', 'deleteAnswer']),
         updateCommonAnswers() {
             const answerIndex = this.getAnswerIndexById(this.selectedQuestion.id);
             if (answerIndex >= 0){ // Если ответы на этот вопрос есть
                 if (this.selectedAnswers.length !== 0 || this.openAnswer !== '') {
                     this.updateAnswer([answerIndex, this.selectedAnswers, this.openAnswer]);
                 } else {
                     this.deleteAnswer(answerIndex);
                 }
             } else {
                 if (this.selectedAnswers.length !== 0 || this.openAnswer !== ''){
                     this.addAnswer([this.selectedQuestion.id, this.openAnswer, this.selectedAnswers])
                 }
             }
             localStorage.setItem(this.test.id.toString(), JSON.stringify(this.answers));
         }
     },
 }
</script>

<style scoped lang="scss">
.options{
    &__item{
        font-size: 17px;
        margin-bottom: 10px;
    }
    &__check-input:checked {
        background-color: var(--brand-color);
        border-color: var(--brand-color);
    }
    &__input:focus{
        border-color: var(--border-color-focus);
        box-shadow: none;
    }
}
</style>
