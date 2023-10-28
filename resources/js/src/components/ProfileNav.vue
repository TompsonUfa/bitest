<template>
    <div class="profile-nav">
        <div :class="this.modalProfile ? 'profile-nav__header_active': null" class="profile-nav__header" @click="this.toggleModal('profile')">
            <div class="profile-nav__wrap-img">
                <img src='/storage/images/1.png' alt="" class="profile-nav__img">
            </div>
            <i class="bi bi-chevron-down profile-nav__icon"></i>
        </div>
        <div v-if="this.modalProfile" class="profile-nav__menu">
            <ul class="profile-nav__list">
                <li class="profile-nav__item">
                    <router-link class="profile-nav__link" to="/profile">
                        <i class="bi bi-person"></i>
                        Мой профиль
                    </router-link>
                </li>
                <li class="profile-nav__item">
                    <router-link class="profile-nav__link" to="/logout">
                        <i class="bi bi-box-arrow-right"></i>
                        Выйти
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

    export default {
        name: "ProfileNav",
        computed: {
          ...mapGetters(['modalProfile'])
        },
        methods: {
            ...mapActions(['toggleModal'])
        }

    }
</script>

<style scoped lang="scss">
.profile-nav {
    position: relative;
    &__header {
        height: 54px;
        padding: 10px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        transition: all .3s ease;
        cursor: pointer;
        &:hover, &_active{
            background-color: var(--button-bg);
        }
        &_active{
            .profile-nav__icon {
                transform: rotate(180deg)
            }
        }
    }
    &__wrap-img{
        width: 35px;
        height: 35px;
        overflow: hidden;
        border-radius: 50%;
    }
    &__img {
        width: inherit;
        height: inherit;
        object-fit: cover;
    }
    &__icon {
        color: #aeb7c2;
        font-size: 12px;
        transition: all 0.3s ease;
    }
    &__menu {
        position: absolute;
        top: var(--header-height);
        right: 0;
        width: 250px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        padding: 10px 15px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: var(--body-bg);
    }
    &__list {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    &__link{
        color: var(--main-color);
        text-decoration: none;
        padding: 10px;
        display: flex;
        gap: 5px;
        transition: all .3s ease;
        &:hover{
            background-color: var(--button-bg);
        }
    }
}
</style>
