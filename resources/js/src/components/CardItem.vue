<template>
    <article class="card">
        <div class="card__wrap-picture">
            <img class="card__picture" src="/storage/images/1.webp" alt="">
        </div>
        <div class="card__content">
            <a href="/categories" class="card__category">Физика</a>
            <h3 class="card__title">Lorem ipsum dolor sit amet cum cupiditate</h3>
            <div class="card__meta">
                <span class="card__author">
                    <a href="/authors/" class="card__author_link">Клочков Р.А.</a>
                </span> -
                <span class="card__date">27, Октября</span>
            </div>
            <router-link class="btn card__btn" to="/tests/1">Перейти</router-link>
        </div>
    </article>
</template>

<script>
export default {
    name: 'CardItem',
}
</script>

<style scoped lang="scss">
    .card {
        position: relative;
        border-radius: 10px;
        border: none;
        padding: 20px;
        height: 100%;
        min-height: 350px;
        overflow: hidden;
        background-color: transparent;
        &:hover &__picture{
            transform: scale(1.2);
        }
        &__wrap-picture{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            width: 100%;
            height: 100%;
        }
        &__picture {
            width: inherit;
            height: inherit;
            object-fit: cover;
            transition: all .3s ease;
        }
        &__content{
            position: relative;
            z-index: 2;
            width: 100%;
            padding: 22px 20px;
            margin-top: auto;
        }
        &__category{
            font-size: 11px;
            color: #fff;
            padding: 3px 7px;
            background-color: rgba(0,0,0,0.7);
            line-height: 13px;
            font-weight: 500;
            text-transform: uppercase;
            pointer-events: auto;
            text-decoration: none;
        }
        &__title {
            color: #fff;
            margin: 10px 0;
            font-size: 25px;
            font-weight: 500;
            line-height: 34px;
            text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        }
        &__meta{
            font-size: 13px;
            color: #fff;
            margin-bottom: 10px;
        }
        &__author {
            &_link {
                text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
                color: #fff;
                text-decoration: none;
            }
        }
        &__btn{
            color: #fff;
            background-color: var(--brand-color);
            transition: all 0.2s ease;
            &:hover {
                background-color: #000;
            }
        }
    }
</style>
