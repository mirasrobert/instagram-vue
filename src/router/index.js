import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Auth/Login.vue'
import Register from '../pages/Auth/Register.vue'
import Profile from '../pages/Profile/Profile.vue'
import AddPost from '../pages/Post/AddPost.vue'

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
  {
    path: '/profiles/:id',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/posts/create',
    name: 'posts.create',
    component: AddPost,
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
