require('./bootstrap');
import Vue from "vue";
import vuetify from "./plugins/vuetify";
import router from "./plugins/router";

new Vue({
    el:'#app',
    vuetify,
    router,
    data(){
        return{
            navItems: [
            {
                title: 'Dashboard',
                icon: 'mdi-view-dashboard',
                route:'/'
            },
            {
                title: 'Products',
                icon: 'mdi-gift-outline',
                route:'/'
            },
            {
                title: 'Orders',
                icon: 'mdi-cart',
                route:'/'

            },
            {
                title: 'Vendors',
                icon: 'mdi-account-multiple',
                route:'/'
            },
        ]
        }
    },
    mounted() {
    }
})
