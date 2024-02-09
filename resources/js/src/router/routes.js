import AuthLayout from "@/layouts/AuthLayout.vue";
import PublicLayout from "@/layouts/PublicLayout.vue";
import CreatedTestLayout from "@/layouts/CreatedTestLayout.vue";

import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import Test from "@/views/Test.vue";
import PreviewTest from "@/components/PreviewTest.vue";
import PassTest from "@/components/PassTest.vue";

import CreatedTestView from "@/views/Test/IndexView.vue";
import CreateTestView from "@/views/Test/CreateView.vue";
import EditTestView from "@/views/Test/EditView.vue";

const routes = [
    {
        path: '/login',
        component: AuthLayout,
        name: 'login',
        meta: {breadcrumb: 'Авторизация', middleware: 'guest'},
    },
    {
        path: '/',
        component: PublicLayout,
        meta: {middleware: 'auth'},
        children: [
            {
                path: '',
                component: Home,
                name: 'home',
                meta: {breadcrumb: 'Главная'},
            },
            {
                path: '/tests/:id',
                redirect: {name: 'preview'},
                component: Test,
                name: 'test',
                meta: {breadcrumb: 'Тест'},
                children: [
                    {
                        path: '',
                        component: PreviewTest,
                        name: 'preview',
                        meta: {breadcrumb: 'Просмотр'},
                    },
                    {
                        path: 'pass',
                        component: PassTest,
                        name: 'pass',
                        meta: {breadcrumb: 'Выполнение'},
                    }
                ]
            },
            {
                path: '/created-tests',
                component: CreatedTestLayout,
                redirect: {name: 'created-tests'},
                name: 'created-tests',
                meta: {breadcrumb: 'Мои тесты'},
                children: [
                    {
                        path: '',
                        component: CreatedTestView,
                        name: 'created-tests',
                    },
                    {
                        path: 'create',
                        component: CreateTestView,
                        name: 'create-test',
                        meta: {breadcrumb: 'Создать'},
                    },
                    {
                        path: ':id/edit',
                        component: EditTestView,
                        name: 'edit-test',
                    }
                ]
            },

            {
                path: '/profile',
                component: Profile,
                name: 'profile',
                meta: {breadcrumb: 'Личный кабинет'},
            }
        ],
    },
]

export default routes;
