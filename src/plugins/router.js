import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import SignupComponent from '../components/SignupComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'
import AccountComponent from '../components/AccountComponent.vue'


Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/signup',
        component: SignupComponent
    },
    {
        path: '/login',
        component: LoginComponent,
    },
    {
        path: '/account',
        component: AccountComponent,
    }
]

export default new VueRouter({
    routes,
    mode: 'history',
});