<template>
    <div @click.self="this.closeModal()" class="modal">
        <div class="modal__box">
            <div class="modal__header">
                <h3 class="modal__title">Завершение теста</h3>
                <div @click="this.closeModal()" class="modal__close">
                    <i class="bi bi-x-lg"></i>
                </div>
            </div>
            <div class="modal__content">
                <div class="modal__info" v-if="list.length > 0">
                    <p class="modal__desc">
                        Вы уверены, что хотите завершить тест?
                    </p>
                    <p class="modal__desc">
                        Вы не ответили на вопросы:
                    </p>
                    <ul class="modal__list">
                        <li v-for="item in list" :key="item.id">{{item.id + ") " + item.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="modal__footer">
                <ui-button>Завершить</ui-button>
            </div>
        </div>
    </div>
</template>

<script>
    import UiButton from "@/components/UI/UiButton.vue";
    import {mapGetters} from "vuex";

    export default {
        name: "ModalEndTest",
        components: {UiButton},
        data(){
            return {
                list: [],
            }
        },
        computed:{
            ...mapGetters(['questions', "answers"]),
        },
        methods: {
            closeModal(){
              this.$emit('close-modal')
            },
            unanswered(){
                let unanswered = [];
                for (let i = 0; i < this.questions.length; i++){
                    const question = this.questions[i];
                    let present = false;
                    for (let j = 0; j < this.answers.length; j++){
                        const answer = this.answers[j];
                        if (question.id === answer.questionId){
                            present = true;
                            break;
                        }
                    }
                    if (!present){
                        unanswered.push(question);
                    }
                }
                return unanswered;
            }
        },
        emits: ['close-modal'],
        mounted() {
            this.list = this.unanswered();
        },
    }
</script>

<style scoped lang="scss">
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        &__box{
            position: relative;
            background-color: var(--body-bg-secondary);
            width: 100%;
            max-width: 500px;
            border-radius: 10px;
            padding: 20px 30px;
        }
        &__header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 25px;
        }
        &__close {
            cursor: pointer;
            color: var(--main-color);
            opacity: 0.5;
            transition: opacity .2s ease;
            &:hover{
                opacity: 1;
            }
        }
        &__content {
            padding: 10px 0;
            font-size: 15px;
        }
        &__title {
            font-size: inherit;
            margin-bottom: 0;
        }
        &__desc {
            font-size: inherit;
            margin-bottom: 10px;
        }
        &__list{
            list-style: none;
            color: var(--main-color);
            font-size: inherit;
            margin: 0 0 10px 0;
            padding: 0;
            max-height: 110px;
            overflow: auto;
            border-radius: 5px;
            background-color: var(--button-bg-second);
            li {
                padding: 10px 10px 0 10px;
                &:last-child {
                    padding: 10px 10px;
                }
            }
        }
        &__footer{
            width: 100%;
            text-align: end;
        }
    }
</style>
