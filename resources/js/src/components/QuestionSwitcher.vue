<template>
    <div class="questions">
        <div v-for="(question, index) in questions" :key="question.id"
             @click="$emit('select-question', question)"
             class="questions__item"
             :class="{'questions__item_active': selectedQuestion === question, 'questions__item_answered': hasAnswer(question.id)
             }">
          {{index + 1}}
        </div>
    </div>
</template>
<script>
import {mapGetters} from "vuex";

    export default {
        name: 'QuestionSwitcher',
        props: {
            questions: {
                type: Array,
                required: true,
            },
            selectedQuestion: {
                type: Object,
                required: false,
            },
            testId: {
                required: false,
            }
        },
        computed: {
          ...mapGetters(['getAnswersByQuestionId'])
        },
        methods: {
            hasAnswer(questionId){
                return !!this.getAnswersByQuestionId([this.testId, questionId])
            }
        },
        emits: ["select-question"],
    }
</script>
<style scoped lang="scss">
    .questions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        &__item {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            background-color: var(--button-bg-second);
            border-radius: 50%;
            cursor: pointer;
            font-weight: 600;
            color: var(--main-color);
            font-size: 14px;
            transition: all .1s linear;
            &_answered{
                color: #fff;
                background-color: var(--brand-color);
                opacity: .5;
            }
            &_active{
                color: #fff;
                background-color: var(--brand-color);
                opacity: 1;
            }
        }
    }
</style>
