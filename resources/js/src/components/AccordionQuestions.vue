<template>
        <div v-if="questions.length > 0" class="col-12 mb-3">
            <div class="d-flex gap-2 align-items-center">
                <QuestionSwitcher @select-question="(item) => selectedQuestion = item"
                                  :selectedQuestion="selectedQuestion"
                                  :questions="questions">
                </QuestionSwitcher>
            </div>
        </div>
        <div class="col-12">
            <QuestionCreationForm :QuestionsLength="questions.length" :selectedQuestion="selectedQuestion"
                                  @add-question="addQuestion"
                                  @edit-question="editQuestion"
                                  @delete-question="deleteQuestion">
            </QuestionCreationForm>
        </div>
</template>

<script>
    import CustomSelect from "@/components/UI/CustomSelect.vue";
    import QuestionSwitcher from "@/components/QuestionSwitcher.vue";
    import QuestionCreationForm from "@/components/QuestionCreationForm.vue";
    import {ref} from "vue";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "AccordionQuestions",
        components: {QuestionCreationForm, QuestionSwitcher, CustomSelect},
        data(){
            return {
                dataLoaded: false,
                selectedQuestion: ref(null),
                questions:ref([]),
            }
        },
        mounted() {
            this.dataLoaded = true;
            this.questions = this.cachedQuestions;
        },
        methods: {
            ...mapActions(['updateQuestions']),
            addQuestion(item){
                this.questions.push(item);
            },
            editQuestion(newQuestion){
                const targetIndex = this.questions.findIndex((question) => question.id === newQuestion.id);
                if (targetIndex !== -1) {
                    this.questions[targetIndex] = newQuestion;
                    this.selectedQuestion = null;
                }
            },
            deleteQuestion(questionId){
                const targetIndex = this.questions.findIndex((question) => question.id === questionId);
                if (targetIndex !== -1) {
                    this.questions.splice(targetIndex, 1);
                    this.selectedQuestion = null;
                }
            }
        },
        watch: {
            questions:{
                deep: true,
                handler(newValue, oldValue) {
                    if (this.dataLoaded){
                        this.updateQuestions(newValue)
                    }
                },
            }
        },
        computed: {
            ...mapGetters(['cachedQuestions']),
        }
    }
</script>

<style scoped lang="scss">
    .add-question{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        height: 34px;
        font-size: 30px;
        color: #2dce89;
        border: 1px solid #2dce89;
        border-radius: 50%;
    }
</style>
