import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import HomePage from '../components/HomePage.vue'
import EmpList from '../components/EmpList.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/auth',
    component: HelloWorld
  },
  {
    path:'/emp',
    component:EmpList
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
