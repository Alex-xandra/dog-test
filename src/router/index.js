import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/favourites',
        name: 'Favourites',
        component: () => import('../components/pages/Favourites.vue')
    },
    {
        path: '/breed/:id',
        name: 'Breed',
        component: () => import('../components/pages/Breed.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
