import home from "../pages/home";
import login from "../pages/login";
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'home',
        component:home
    },
    {
        path:'/login',
        name:'login',
        component:login
    },

];

const router = new VueRouter({
    routes:routes,
    mode:'history'
});

export default router;

