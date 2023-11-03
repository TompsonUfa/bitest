<template>
    <div class="questions">
        <div @click="selectQuestion(question)"
             v-for="(question, index) in questions" :key="question.id"
             :class="selectedQuestion === question ? 'questions__item_active' : ''"
             class="questions__item">
          {{index + 1}}
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: 'QuestionSwitcher',
        props: {
            questions: Array,
            selectedQuestion: Object,
        },
        methods: {
            ...mapActions(['selectQuestion']),
        }
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
            width: 30px;
            height: 30px;
            background-color: var(--button-bg-second);
            border-radius: 50%;
            cursor: pointer;
            font-weight: 600;
            color: var(--main-color);
            font-size: 14px;
            &_active{
                color: #fff;
                background-color: var(--brand-color);
            }
        }
    }
</style>
