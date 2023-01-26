import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '../views/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'detailContent',
    component: Detail
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router