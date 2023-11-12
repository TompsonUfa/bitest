import AuthLayout from "@/layouts/AuthLayout.vue";
import PublicLayout from "@/layouts/PublicLayout.vue";
import CreatedTestLayout from "@/layouts/CreatedTestLayout.vue";

import Home from "@/pages/Home.vue";
import Profile from "@/pages/Profile.vue";
import Test from "@/pages/Test.vue";
import PreviewTest from "@/components/PreviewTest.vue";
import PassTest from "@/components/PassTest.vue";
import CreatedTest from "@/pages/CreatedTest.vue";
import CreateTest from "@/pages/CreateTest.vue";
const routes = [

    {
        path: '/login',
        component: AuthLayout,
        name: 'login',
        meta: { breadcrumb: 'Авторизация', middleware: 'guest' },
    },
    {
        path: '/',
        component: PublicLayout,
        meta: { middleware: 'auth' },
        children: [
            {
                path: '',
                component: Home,
                name: 'home',
                meta: { breadcrumb: 'Главная'},
            },
            {
                path: '/tests/:id',
                redirect: { name: 'preview' },
                component: Test,
                name: 'test',
                meta: { breadcrumb: 'Тест' },
                children: [
                    {
                        path: '',
                        component: PreviewTest,
                        name: 'preview',
                        meta: { breadcrumb: 'Просмотр' },
                    },
                    {
                        path: 'pass',
                        component: PassTest,
                        name: 'pass',
                        meta: { breadcrumb: 'Выполнение' },
                    }
                ]
            },
            {
                path: '/created-tests',
                component: CreatedTestLayout,
                redirect: { name: 'created-list' },
                name: 'created',
                meta: { breadcrumb: 'Мои тесты' },
                children: [
                    {
                        path: '',
                        component: CreatedTest,
                        name: 'created-list',
                    },
                    {
                        path: 'create',
                        component: CreateTest,
                        name: 'create',
                        meta: { breadcrumb: 'Создать' },
                    }
                ]
            },

            {
                path: '/profile',
                component: Profile,
                name: 'profile',
                meta: { breadcrumb: 'Личный кабинет' },
            }
        ],
    },


]

export default routes;
