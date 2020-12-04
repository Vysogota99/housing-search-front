import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import HelloWorld from '../components/HelloWorld.vue'
import SignupComponent from '../components/SignupComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'
import AccountComponent from '../components/AccountComponent.vue'
import RoomsComponent from '../components/RoomsComponent.vue'
import RoomsMapComponent from '../components/RoomsMapComponent.vue'
import SearchHomeComponent from '../components/SearchHomeComponent.vue'
import MyAdsComponen from '../components/MyAdsComponent.vue'


Vue.use(VueRouter);
const routes = [
    {
        path: '/',
        name: 'root',
        component: HelloWorld
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignupComponent
    },
    {
        path: '/login',
        name: 'login',
        component: LoginComponent,
    },
    {
        path: '/account',
        name: 'account',
        component: AccountComponent,
        meta: {
            requiresAuth: true,
            
        }
    },
    {
        path: '/rooms',
        name: 'rooms-cards',
        component: RoomsComponent,
    },
    {
        path: '/rooms/map',
        name: 'rooms-map',
        component: RoomsMapComponent,
    },
    {
        path: '/lots',
        name: 'lots-cards',
        component: SearchHomeComponent,
    },
    {
        path: '/my-ads',
        name: 'my-ads',
        component: MyAdsComponen,
    }
]

let router = new VueRouter({
    routes,
    mode: 'history',
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(store.getters.authStatus) {
            next();
            return;
        }

        next('/login');
    }else{
        next()
    }
})

export default router;