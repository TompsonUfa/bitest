<template>
    <ul class="breadcrumbs my-3">
        <li class="breadcrumbs__item">
            <router-link class="breadcrumbs__link" to="/">Главная</router-link>
            <span>/</span>
        </li>
        <breadcrumb-item
            v-for="(item, index) in breadcrumbs"
            :key="index"
            :item="item"
            :last = "index === breadcrumbs.length - 1"
        ></breadcrumb-item>
    </ul>
</template>

<script>
import BreadcrumbItem from "@/components/BreadcrumbItem.vue";
export default {
    name: 'AppBreadcrumb',
    components: {
        BreadcrumbItem,
    },
    computed: {
        breadcrumbs() {
            console.log(this.$route.matched)
            return this.$route.matched.map(route => {
                const breadcrumbText = route.meta.breadcrumb;
                if (breadcrumbText) {
                    return {
                        text: breadcrumbText,
                        to: route.path,
                    };
                } else {
                    return null;
                }
            }).filter(item => item !== null);
        }
    },
}
</script>

<style lang="scss">
    .breadcrumbs{
        background-color: var(--body-bg-secondary);
        padding: 15px 30px;
        border-radius: 15px;
        display: flex;
        gap: 5px;
        flex-wrap: wrap;;
        list-style: none;
        &__item {
            display: flex;
            gap: 5px;
            span {
                transition: .3s ease;
                color: var(--main-color);
            }
        }
        &__link{
            color: var(--main-color);
            padding: 0;
            text-decoration: none;
            font-weight: 700;
            transition: .3s ease;
            &:hover{
                color: var(--brand-color);
            }
        }
    }
</style>
