<template>
    <div class="preview">
        <div class="row align-items-center">
            <div class="col-6">
                <h2 class="preview__title">{{this.test.title}}</h2>
                <p class="preview__desc">{{this.test.desc}}</p>
                <div class="preview__meta">
                    <div class="preview__attempts">Количество попыток: 1 / {{this.test.attempts}}</div>
                    <div class="preview__time">Время на тест: {{ this.test.time }} минут</div>
                </div>
                <router-link :to="{ name: 'pass', params: { id: $route.params.id } }" class="preview__btn btn btn-lg">Начать</router-link>
            </div>
            <div class="col-6">
                <div class="preview__wrap">
                    <img class="preview__img" src="/storage/images/1.webp" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'PreviewTest',
        computed:{
            ...mapGetters(['test'])
        },
    }
</script>

<style scoped lang="scss">
    .preview {
    padding: 40px;
    border-radius: 15px;
    background-color: var(--body-bg-secondary);
    &__title{
        color: var(--main-color);
        font-size: 30px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    &__desc {
        color: var(--main-color);
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 20px;
    }
    &__meta {
        color: var(--main-color);
        margin-bottom: 20px;
    }
    &__wrap{
        width: 100%;
        overflow: hidden;
        border-radius: 15px;
    }
    &__img {
        width: inherit;
        object-fit: cover;
    }
    &__btn {
        color: #fff;
        background-color: var(--brand-color);
        transition: all 0.2s ease;
        &:hover {
            background-color: #000;
        }
    }
}
</style>
