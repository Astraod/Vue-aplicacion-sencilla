import { createRouter, createWebHistory } from 'vue-router'

import Contador from '../components/ContadorComponent.vue/index.js'
import ListaTareas from '../components/ListaTareas.vue'

const routes = [
    {
        path: '/',
        component: Contador
    },
    {
        path: '/lista',
        component: ListaTareas
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router