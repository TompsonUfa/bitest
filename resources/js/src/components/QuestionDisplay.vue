<template>
    <div class="test__question question">
        <h4 class="question__title mb-3">{{ selectedQuestion.name }}</h4>
        <div class="question__options options">
            <div v-if="!selectedQuestion.open" v-for="option in selectedQuestion.options"
                 :key="option.id" class="options__item">
                <div class="form-check">
                    <input v-model="this.answer.selected"  name="option"
                           :type="selectedQuestion.several ? 'checkbox' : 'radio'"
                           :value="option.id" class="form-check-input options__input"
                           :id="'option-' + option.id">
                    <label class="form-check-label" :for="'option-' + option.id">
                        {{option.name}}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    export default {
        name: 'QuestionDisplay',
        props: {
            selectedQuestion: {
                type: Object,
                required: true,
            },
        },
        data(){
            return {
                answer: {
                    questionId: '',
                    open: '',
                    selected: this.selectedQuestion.several ? [] : '',
                },
            }
        },
        watch: {
            selectedQuestion(question) {
                this.answer.questionId = question.id;
                this.answer.open = '';
                this.answer.selected = [];
            },
        },
        methods: {
          ...mapActions(['selectAnswer']),
        },
    }
</script>

<style scoped lang="scss">
.options{
    &__item{
        font-size: 17px;
        margin-bottom: 10px;
    }
    &__input:checked {
        background-color: var(--brand-color);
        border-color: var(--brand-color);
    }
}
</style>
