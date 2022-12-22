import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Auth/Login.vue'
import Register from '../pages/Auth/Register.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // When Router Link is Clicked, always scroll the new page on the top of page
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' })
  },
})

export default router
