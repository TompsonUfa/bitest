<template>
    <div class="test">
        <div class="row">
            <div class="col-12 mb-3">
                <h3 class="title test__title">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            </div>
            <div class="col-12 mb-3">
                <div class="test__questions questions">
                    <div @click="this.selectQuestion = question" class="questions__item" :class="this.selectQuestion === question ? 'questions__item_active' : ''"
                         v-for="(question, index) in questions" :key="question.id" >
                        {{index + 1}}
                    </div>
                </div>
            </div>
            <div v-if="this.selectQuestion" class="col-12 mb-3">
                <div class="test__question question">
                    <h4 v-if="this.selectQuestion.several" class="question__title">
                        Вопрос с неск. ответами: {{ this.selectQuestion.name }}
                    </h4>
                    <h4 v-if="!this.selectQuestion.several && !this.selectQuestion.open" class="question__title">
                        Вопрос одним вариантом ответа: {{ this.selectQuestion.name }}
                    </h4>
                    <h4 v-if="this.selectQuestion.open" class="question__title">Вопрос с открытым ответом: {{ this.selectQuestion.name }}</h4>
                    <div v-if="this.selectQuestion.several" class="question__answers answers">
                        <div v-for="answer in this.selectQuestion.answers" :key="answer.id" class="answers__item">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="answer">
                                <label class="form-check-label" for="answer">
                                    {{answer.name}}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div v-if="!this.selectQuestion.several && !this.selectQuestion.open"
                         class="question__answers answers">
                        <div v-for="answer in this.selectQuestion.answers" :key="answer.id" class="answers__item">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="answer" id="answer">
                                <label class="form-check-label" for="answer">
                                    {{answer.name}}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div v-if="this.selectQuestion.open" class="question__answers answers">
                        <div class="answers__item">
                            <input type="text" id="answer">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 mb-3">
                <ui-button>Следующий</ui-button>
            </div>
            <div class="col-12">
                <ui-button>Завершить</ui-button>
            </div>
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
                        name: '1 вопрос',
                        several: false,
                        open: false,
                        answers: [
                            {id: 1, name: '1'},
                            {id: 2, name: '2'},
                            {id: 3, name: '3'},
                        ]
                    },
                    {
                        id: 2,
                        name: '2 вопрос' ,
                        several: true,
                        open: false,
                        answers: [
                            {id: 1, name: '1'},
                            {id: 2, name: '2'},
                            {id: 3, name: '3'},
                        ]
                    },
                    {
                        id: 2,
                        name: '3 вопрос' ,
                        several: false,
                        open: true,
                    },
                ],
            }
        }
    }
</script>

<style scoped lang="scss">
    .test {
        padding: 30px;
        border-radius: 15px;
        background-color: var(--body-bg-secondary);
        &__title{
            color: var(--main-color);
            font-size: 30px;
            font-weight: 700;
        }
    }
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
