<template>
    <div class="test">
        <div class="row mb-3 align-items-center">
            <div class="col-9">
                <question-switcher :selectedQuestion="this.selectedQuestion"
                                   :questions="this.questions"
                                   :answers="this.answers"
                                   @select="(item) => selectQuestion(item)"
                                   class="test__questions">
                </question-switcher>
            </div>
            <div class="col-1 text-end">
                <ui-timer></ui-timer>
            </div>
            <div class="col-2 text-end">
                <ui-button @click="this.toggleModal()">Завершить</ui-button>
            </div>
        </div>
        <div class="row" v-if="selectedQuestion">
            <div class="col-12 mb-3">
                <question-display></question-display>
           </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ui-button @click="this.nextQuestion" class="test__btn next-question">Следующий</ui-button>
            </div>
        </div>
        <modal-end-test @close-modal="this.toggleModal()" v-if="this.modalShow"></modal-end-test>
    </div>
</template>

<script>
import QuestionSwitcher from "@/components/QuestionSwitcher.vue";
import QuestionDisplay from "@/components/QuestionDisplay.vue";
import UiButton from "@/components/UI/UiButton.vue";
import UiTimer from "@/components/UiTimer.vue";
import ModalEndTest from "@/components/ModalEndTest.vue";
import {mapActions, mapGetters} from "vuex";
    export default {
        name: 'PassTest',
        components: {
            QuestionSwitcher,
            QuestionDisplay,
            UiButton,
            UiTimer,
            ModalEndTest
        },
        computed:{
            ...mapGetters(['test','questions', 'selectedQuestion', 'answers', 'getAnswersById']),
        },
        mounted() {
            this.userResponses(this.test.id);
            this.checkAnswers();
        },
        methods: {
            ...mapActions(['selectQuestion', 'userResponses']),
            checkAnswers(){
                let allAnswered = false;
                for (let i = 0; i < this.questions.length; i++){
                    const question = this.questions[i].id;
                    let questionAnswer = false;
                    for( let j = 0; j < this.answers.length; j++){
                        if (question === this.answers[j].questionId){
                            allAnswered = true;
                            questionAnswer = true;
                            break;
                        }
                    }
                    if(!questionAnswer){
                        allAnswered = false;
                        this.selectQuestion(this.questions[i]);
                        break;
                    }
                }
                if (allAnswered) {
                    this.selectQuestion(this.questions[0]);
                }
            },
            nextQuestion(){
                for (let i = 0; i < this.questions.length; i++){
                    if (this.questions[i].id == this.selectedQuestion.id){
                        if (i === this.questions.length - 1){
                            this.selectQuestion(this.questions[0]);
                            break;
                        }
                        this.selectQuestion(this.questions[i+1]);
                        break;
                    }
                }
            },
            toggleModal(){
                this.modalShow = !this.modalShow;
            },
        },
        data(){
            return{
                modalShow: false,
            }
        }
    }
</script>

<style scoped lang="scss">
    .test {
        &__title{
            color: var(--main-color);
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
        }
    }
</style>
