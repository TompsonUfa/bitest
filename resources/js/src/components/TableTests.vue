<template>
    <div class="wrap-table">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Тест</th>
                <th scope="col">Статус</th>
                <th scope="col">Проверенные</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(test, index) in tests" :key="index">
                <td>
                    <div class="table__media media">
                        <div class="media__img">
                            <img :src="test.image" alt="">
                        </div>
                        <div class="media__text">
                            {{ test.title }}
                        </div>
                    </div>
                </td>
                <td>
                    <span class="badge badge-dot mr-4">
                        <template v-if="!test.published">
                             <i class="bg-danger"></i>
                            Не опубликован
                        </template>
                        <template v-else>
                            <i class="bg-success"></i>
                            Опубликован
                        </template>

                    </span>
                </td>
                <td>
                    <div class="d-flex gap-2 align-items-center">
                        <span>60%</span>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                 aria-valuemax="100" style="width: 60%;"></div>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="table__dropdown dropdown">
                        <div class="dropdown__btn">
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div class="dropdown__menu">
                            <ul class="dropdown__list">
                                <li class="dropdown__item">
                                    <router-link class="dropdown__link" :to="{name: ''}">Изменить</router-link>
                                </li>
                                <li class="dropdown__item">
                                    <router-link class="dropdown__link" :to="{name: ''}">Проверить</router-link>
                                </li>
                                <li class="dropdown__item">
                                    <router-link class="dropdown__link" :to="{name: ''}">Удалить</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </td>
            </tr>
            <!--            <tr>-->
            <!--                <td>-->
            <!--                    <div class="table__media media">-->
            <!--                        <div class="media__img">-->
            <!--                            <img src="/storage/images/1.webp" alt="">-->
            <!--                        </div>-->
            <!--                        <div class="media__text">-->
            <!--                            Физика-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </td>-->
            <!--                <td>Нано-частицы</td>-->
            <!--                <td>-->
            <!--                    <span class="badge badge-dot mr-4">-->
            <!--                        <i class="bg-success"></i>-->
            <!--                        Опубликован-->
            <!--                    </span>-->
            <!--                </td>-->
            <!--                <td>-->
            <!--                    <div class="d-flex gap-2 align-items-center">-->
            <!--                        <span>100%</span>-->
            <!--                        <div class="progress">-->
            <!--                            <div class="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </td>-->
            <!--                <td>-->
            <!--                    <div class="table__dropdown dropdown">-->
            <!--                        <div class="dropdown__btn">-->
            <!--                            <i class="bi bi-three-dots"></i>-->
            <!--                        </div>-->
            <!--                        <div class="dropdown__menu"></div>-->
            <!--                    </div>-->
            <!--                </td>-->
            <!--            </tr>-->
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "TableTests",
    props: {
        tests: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped lang="scss">
.wrap-table {
    overflow: auto;
    max-height: 450px;
    scroll-behavior: smooth;
}

.table {
    margin: 0;

    thead {
        position: sticky;
        top: 0;
        z-index: 1;
        color: var(--main-color);
    }

    tbody {
        color: var(--main-color);
    }

    th, td {
        color: inherit;
        background-color: inherit;
        vertical-align: middle;
    }

    .media {
        display: flex;
        align-items: center;
        gap: 10px;

        &__img {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;

            img {
                object-fit: cover;
                width: inherit;
                height: inherit;
            }
        }

    }

    .badge-dot {
        font-size: inherit;
        font-weight: 400;
        padding-right: 0;
        padding-left: 0;
        text-transform: none;
        background: transparent;
        color: var(--main-color);

        i {
            display: inline-block;
            width: 0.375rem;
            height: 0.375rem;
            margin-right: 0.375rem;
            vertical-align: middle;
            border-radius: 50%;
        }
    }

    .progress {
        width: 130px;
        height: 3px;
        margin: 0;
    }
}

.dropdown {
    position: relative;

    &__btn {
        width: 36px;
        height: 36px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .3s ease;
        border-radius: 5px;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        }
    }

    &__menu {
        z-index: 200;
        position: absolute;
        right: 0;
        width: 200px;
        border-radius: 16px;
        background-color: var(--body-bg);
        overflow: hidden;
        border: 1px solid var(--border-color);
    }

}
</style>
