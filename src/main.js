import { createApp } from 'vue'
import 'flowbite';
import './style.css' // Global CSS
import App from './App.vue' // Root Component

import store from './store' // VueX
import router from './router' // Router

// Subscriber runs for every vuex mutation
// After commit this store.subscribe will run
import subsriber from './store/subscriber'

subsriber()

store.dispatch('attempt', localStorage.getItem('token')).then(() => {
  // After loading the ME api
  // Then render the vue

  createApp(App).use(store).use(router).mount('#app')
})
