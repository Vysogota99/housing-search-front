import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import SignupComponent from '../components/SignupComponent.vue'
Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/signup',
        component: SignupComponent
    }
]

export default new VueRouter({
    routes,
    mode: 'history',
});