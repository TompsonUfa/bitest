import {createRouter, createWebHistory} from "vue-router";
import routes from "@/router/routes.js";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes: routes,
})

router.beforeEach((to, from, next) => {
   const token = localStorage.getItem('x_xsrf_token');
   if (!token){
        if (to.name === 'login'){
            return next()
        } else {
            return next({
                name: 'login',
            })
        }
   }
    if (to.name === 'login' && token){
        return next({
            name: 'home',
        })
    }

    next();

});

export default router;
