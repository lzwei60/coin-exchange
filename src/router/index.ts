import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/pages/home.vue'
import Login from '../views/login/login.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      nameCN: "首页"
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
