import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Accueil from '../components/Accueil.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/Contact.vue')
  },
  {
    path: '/insription',
    name : 'Inscription',
    component: () => import('../components/Inscription.vue')
  },
  {
    path: '/connexion',
    name : 'Connexion',
    component: () => import('../components/Connexion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
