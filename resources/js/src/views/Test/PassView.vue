<template>
    <div class="test">
        <div class="row mb-3 align-items-center">
            <div class="col-9">
                <question-switcher
                    v-if="this.test.questions"
                    :selectedQuestion="this.selectedQuestion"
                    :questions="this.test.questions"
                    :testId="this.test.id"
                    @select-question="(item) => this.selectedQuestion = item"
                    class="test__questions">
                </question-switcher>
            </div>
            <div class="col-1 text-end">
                <ui-timer></ui-timer>
            </div>
            <div class="col-2 text-end">
                <ui-button @click="this.modalShow = !this.modalShow">Завершить</ui-button>
            </div>
        </div>
        <div class="row" v-if="selectedQuestion">
            <div class="col-12 mb-3">
                <question-display :testId="this.test?.id" :selectedQuestion="this.selectedQuestion"></question-display>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <ui-button @click="this.nextQuestion" class="test__btn next-question">Следующий</ui-button>
            </div>
        </div>
        <modal-end-test :testId="this.test?.id"
                        :questions="this.test.questions"
                        @close-modal="this.modalShow = !this.modalShow"
                        v-if="this.modalShow">
        </modal-end-test>
    </div>
    <ui-button @click="this.clearCache" class="mt-5">Очистить кэш</ui-button>
</template>

<script>
import QuestionSwitcher from "@/components/QuestionSwitcher.vue";
import QuestionDisplay from "@/components/QuestionDisplay.vue";
import UiButton from "@/components/UI/UiButton.vue";
import UiTimer from "@/components/UiTimer.vue";
import ModalEndTest from "@/components/ModalEndTest.vue";
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
    name: 'PassView',
    components: {
        QuestionSwitcher,
        QuestionDisplay,
        UiButton,
        UiTimer,
        ModalEndTest
    },
    computed: {
        ...mapGetters(['getAnswersByQuestionId', 'getUserTestResponse']),
    },
    data() {
        return {
            test: {
                id: null,
                questions: [],
            },
            selectedQuestion: null,
            idxSelectedQuestion: 0,
            modalShow: false,
        }
    },
    mounted() {
        this.getTest(this.$route.params.id);
    },
    methods: {
        ...mapActions(['clearCache']),
        checkAnswers() {
            let testValidated = false;
            for (let i = 0; i < this.test.questions.length; i++) {
                const questionId = this.test.questions[i].id;
                let questionResolved = false;

                const answers = this.getAnswersByQuestionId([this.test.id, questionId])

                if (typeof answers === 'object') {
                    testValidated = true;
                    questionResolved = true;
                }

                if (!questionResolved) {
                    testValidated = false;
                    this.selectedQuestion = this.test.questions[i];
                    break;
                }
            }
            if (testValidated) {
                this.selectedQuestion = this.test.questions[0];
            }
        },
        nextQuestion() {
            if (!this.selectedQuestion) {
                this.selectedQuestion = this.test.questions[0];
            } else {
                const indexQuestion = this.test.questions.findIndex(question => question.id === this.selectedQuestion.id);
                if (this.test.questions[indexQuestion + 1]) {
                    this.selectedQuestion = this.test.questions[indexQuestion + 1];
                } else {
                    this.selectedQuestion = this.test.questions[0];
                }
            }
        },
        getTest(testId) {
            axios.get(`/api/tests/${testId}/pass`)
                .then(res => {
                    const test = res.data.data;

                    if (!Boolean(test.published)) {
                        this.$router.push({name: 'home'})
                    }

                    this.test.id = test.id;
                    this.test.questions = test.questions;
                    this.checkAnswers();
                })
                .catch(err => {
                    console.log(err)
                })
        }
    },
}
</script>

<style scoped lang="scss">
.test {
    &__title {
        color: var(--main-color);
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
    }
}
</style>
