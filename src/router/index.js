import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from '../views/Container'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Container',
    // beforeEnter (to, from, next, ) {
     
  
    // },
    // meta: {
    //   reqireAuth: true
    // },
    component: Container
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/detail/:tableName/:id',
    name: 'Detail',
    component: () => import( '../views/Detail.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/Setting',
    name: 'Setting',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/Mine',
    name: 'Mine',
    component: ()=> import('../views/Mine.vue')   
  },
  {
    path: '/Search',
    name: 'Search',
    component: ()=> import('../views/Search.vue')   
  },
  {
    path: '/Yzm',
    name: 'Yzm',
    component: ()=> import('../views/Yzm.vue')   
  },
]

const router = new VueRouter({
  routes
})

export default router
