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
import CreateAdComponent from '../components/CreateAdComponent.vue'
import NotFoundComponent from '../components/subComponents/NotFoundComponent.vue'
import TemplatesComponent from '../components/TemplatesComponent.vue'
import AddeFlatComponent from '../components/AddFlatComponent.vue'
import DetailInfoComponent from '../components/DetailInfoComponent.vue'

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
        meta: {
            requiresAuth: true,
            role: 1,
        }
    },
    {
        path: '/lot/create/:id/:isConstruct',
        name: 'create ad',
        component: CreateAdComponent,
        meta: {
            requiresAuth: true,
            role: 1,
        }
    },
    {
        path: '/lot/template',
        name: 'create ad',
        component: TemplatesComponent,
        meta: {
            requiresAuth: true,
            role: 1,
        }
    },
    {
        path: '/info',
        name: 'info-',
        component: DetailInfoComponent,
    },
    {
        path: '/lot/create',
        component: AddeFlatComponent,

    },
    {
        path: '*',
        component: NotFoundComponent,
    },
]

let router = new VueRouter({
    routes,
    mode: 'history',
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(store.getters.authStatus) {
            const currRole = localStorage.getItem('role');
            // если залогинен
            if(to.meta.role == currRole || !to.meta.role) {
                console.log('Авторизован с правами');
                next()
            }else{
                console.log('Авторизован без прав, необходимо: ' + to.meta.role + ' / имеется: ' + currRole);
                next('/');
            }
        }
        else{
            console.log('Не авторизован');
            next('/login');
        }
    }else{
        next()
    }
})

export default router;