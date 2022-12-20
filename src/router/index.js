import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
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
