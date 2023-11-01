import Home from "@/pages/Home.vue";
import Test from "@/pages/Test.vue";
import PreviewTest from "@/components/PreviewTest.vue";
import PassTest from "@/components/PassTest.vue";
const routes = [
    {
        path: '/',
        component: Home,
        meta: { breadcrumb: 'Главная' }
    },
    {
        path: '/tests/:id',
        component: Test,
        name: 'test',
        meta: { breadcrumb: 'Тест' },
        children: [
            {
                path: '',
                component: () => import('@/components/PreviewTest.vue'),
            },
            {
                path: 'pass',
                name: 'pass',
                component: PassTest,
                meta: { breadcrumb: 'Сдача' },
            }
        ]
    },

]

export default routes;
