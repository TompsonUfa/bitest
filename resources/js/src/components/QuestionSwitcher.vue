<template>
    <div class="questions">
        <div @click="selectQuestion(question)"
             v-for="(question, index) in questions" :key="question.id"
             class="questions__item"
             :class="
             {'questions__item_active': this.selectedQuestion == question,
                'questions__item_answered': this.answered(question)
             }">
          {{index + 1}}
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

    export default {
        name: 'QuestionSwitcher',
        methods: {
            ...mapActions(['selectQuestion']),
            answered(question){
                return !!this.getAnswersById(question.id);
            }
        },
        computed: {
            ...mapGetters(['selectedQuestion', 'questions', 'getAnswersById'])
        },
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
