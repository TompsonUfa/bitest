<template>
    <div class="modal-search">
        <div @click="this.toggleModal('search')" class="btn btn-close modal-search__btn-close"></div>
        <div class="modal-search__content">
            <form @submit.prevent="this.submitForm()" class="form-search">
                <div class="form-search__wrap">
                    <div @click="this.submitForm()" class="form-search__btn">
                        <i class="bi bi-search"></i>
                    </div>
                    <input v-model="value" type="text" placeholder="Поиск..." class="form-search__input">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "ModalSearch",
    data(){
        return {
           value: "",
        }
    },
    methods: {
        ...mapActions(['toggleModal']),
        submitForm(){
            this.toggleModal('search');
        }
    }
}
</script>

<style scoped lang="scss">
    .modal-search {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: var(--index-modal);
        backdrop-filter: blur(3px);
        display: flex;
        justify-content: center;
        align-items: center;
        &__btn-close {
            position: absolute;
            top: 10%;
            right: 10%;
            font-size: 25px;
        }
        &__content{
            width: 100%;
            max-width: 500px;
            padding: 40px;
        }
    }
    .form-search{
        width: 100%;
        &__wrap {
            width: 100%;
            display: flex;
            align-items: center;
            padding: 10px;
            gap: 10px;
            border: 1px solid var(--border-color)
        }
        &__input {
            width: 100%;
            border: none;
            outline: none;
            font-size: 17px;
            letter-spacing: 1.3px;
        }
        &__btn {
            opacity: 0.5;
            font-size: 20px;
            cursor: pointer;
            &:hover{
                opacity: 1;
            }
        }
    }
</style>
