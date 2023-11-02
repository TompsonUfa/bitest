<template>
    <div class="test">
<!--        <div class="row">-->
<!--            <div class="col-12">-->
<!--                <h2 class="title test__title">Глобальное путешествие: географический тест на знание стран и столицы</h2>-->
<!--            </div>-->
<!--        </div>-->
        <div class="row mb-3 align-items-center">
            <div class="col-10">
                <div class="test__questions questions">
                    <div @click="this.selectQuestion = question" class="questions__item" :class="this.selectQuestion === question ? 'questions__item_active' : ''"
                         v-for="(question, index) in questions" :key="question.id" >
                        {{index + 1}}
                    </div>
                </div>
            </div>
            <div class="col-2 text-end">
                <ui-button class="test__btn next-question">Следующий</ui-button>
            </div>
        </div>
        <div class="row">
            <div class="col-12 mb-3" v-if="this.selectQuestion" >
                <div class="test__question question">
                    <h4 class="question__title mb-3">{{ this.selectQuestion.name }}</h4>
                    <div v-if="this.selectQuestion.several" class="question__options options">
                        <div v-for="option in this.selectQuestion.options" :key="option.id" class="options__item">
                            <div class="form-check">
                                <input class="form-check-input options__check" type="checkbox" :id="'option' + option.id">
                                <label class="form-check-label" :for="'option' + option.id">
                                    {{option.name}}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div v-if="!this.selectQuestion.several && !this.selectQuestion.open"
                         class="question__options options">
                        <div v-for="option in this.selectQuestion.options" :key="option.id" class="options__item">
                            <div class="form-check">
                                <input class="form-check-input options__check" type="radio" name="option" :id="'option' + option.id">
                                <label class="form-check-label" :for="'option' + option.id">
                                    {{option.name}}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div v-if="this.selectQuestion.open" class="question__options options">
                        <div class="options__item">
                            <input type="text" id="option">
                        </div>
                    </div>
                </div>
            </div>
<!--            <div class="col-12 text-end">-->
<!--                <ui-button>Завершить</ui-button>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
import UiButton from "@/components/UI/UiButton.vue";
    export default {
        name: 'PassTest',
        components: {
            UiButton,
        },
        data(){
            return {
                selectQuestion: '',
                questions: [
                    {
                        id: 1,
                        name: 'Какая столица России?',
                        several: false,
                        open: false,
                        options: [
                            {id: 1, name: 'Москва'},
                            {id: 2, name: 'Санкт-Петербург'},
                            {id: 3, name: 'Киев'},
                        ]
                    },
                    {
                        id: 2,
                        name: 'Какое озеро считается самым глубоким в мире?' ,
                        several: true,
                        open: false,
                        options: [
                            {id: 1, name: 'Байкал'},
                            {id: 2, name: 'Онтарио'},
                            {id: 3, name: 'Каспийское море'},
                        ]
                    },
                    {
                        id: 2,
                        name: 'Какая страна находится на северном полюсе?' ,
                        several: false,
                        open: true,
                    },
                ],
                answers: [],
            }
        },
        mounted() {
            this.checkAnswers();
        },
        methods: {
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
                        this.selectQuestion = this.questions[i];
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
    .questions {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        &__title{
            margin-bottom: 20px;
        }
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
    .options{
        &__item{
            font-size: 17px;
            margin-bottom: 10px;
        }
        &__check:checked {
            background-color: var(--brand-color);
            border-color: var(--brand-color);
        }
    }
</style>
