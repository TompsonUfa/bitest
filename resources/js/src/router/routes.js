import AuthLayout from "@/layouts/AuthLayout.vue";
import PublicLayout from "@/layouts/PublicLayout.vue";
import Home from "@/pages/Home.vue";
import Test from "@/pages/Test.vue";
import PreviewTest from "@/components/PreviewTest.vue";
import PassTest from "@/components/PassTest.vue";
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
                meta: { breadcrumb: 'Главная', middleware: 'auth' },
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
                        name: 'pass',
                        component: PassTest,
                        meta: { breadcrumb: 'Выполнение теста' },
                    }
                ]
            },
        ],
    },


]

export default routes;
