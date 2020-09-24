import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '../views/Container'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Container',
    component: Container
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
