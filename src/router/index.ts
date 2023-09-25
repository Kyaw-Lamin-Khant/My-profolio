import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/skill',
    name: 'skill',
    component:()=>import('../views/SkillView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component:()=>import('../views/projectView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component:()=>import('../views/contantView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
