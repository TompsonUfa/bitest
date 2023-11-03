<template>
    <div class="test">
        <div class="row mb-3 align-items-center">
            <div class="col-10">
                <question-switcher :selectedQuestion="selectedQuestion" :questions="questions" class="test__questions"></question-switcher>
            </div>
            <div class="col-2 text-end">
                <ui-button class="test__btn next-question">Следующий</ui-button>
            </div>
        </div>
        <div class="row" v-if="selectedQuestion">
            <div class="col-12 mb-3">
                <question-display :selectedQuestion="selectedQuestion"></question-display>
           </div>
        </div>
    </div>
</template>

<script>
import QuestionSwitcher from "@/components/QuestionSwitcher.vue";
import QuestionDisplay from "@/components/QuestionDisplay.vue";
import UiButton from "@/components/UI/UiButton.vue";
import {mapActions, mapGetters} from "vuex";
    export default {
        name: 'PassTest',
        components: {
            QuestionSwitcher,
            QuestionDisplay,
            UiButton,
        },
        computed:{
            ...mapGetters(['questions', 'selectedQuestion', "answers"]),
        },
        mounted() {
            this.checkAnswers();
        },
        methods: {
            ...mapActions(['selectQuestion']),
            checkAnswers(){
                for (let i = 0; i < this.questions.length; i++){
                    const question = this.questions[i].id;
                    let questionAnswer = false;
                    for( let j = 0; j < this.answers.length; j++){
                        if (question === this.answers[j].question){
                            questionAnswer = true;
                            break;
                        }
                    }
                    if(!questionAnswer){
                        this.selectQuestion(this.questions[i]);
                        break;
                    }
                }
            }

        },
    }
</script>

<style scoped lang="scss">
    .test {
        padding: 30px;
        border-radius: 15px;
        background-color: var(--body-bg-secondary);
        &__title{
            color: var(--main-color);
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
        }
    }

</style>
