<template>
  <nav id="header" class="w-full py-3 bg-white">
    <Container>
      <div class="flex justify-between items-center space-x-3 md:space-x-0">
        <div class="logo">
          <router-link :to="{ name: 'home' }">
            <img
              src="https://www.dafont.com/forum/attach/orig/7/3/737566.png?1"
              alt=""
              width="110"
              height="110" />
          </router-link>
        </div>
        <div class="search">
          <form>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              class="placeholder:text-center bg-gray-100 py-1 px-2 border border-gray-400" />
          </form>
        </div>
        <div class="profile flex space-x-6 items-center">
          <router-link :to="{ name: 'home' }" title="Feed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </router-link>
          <button @click="onLogout" title="Logout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
          </button>
          <button @click="toggleModal" title="Create Post">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <router-link
            v-if="user"
            :to="{ name: 'profile', params: { id: user.username } }" title="Profile">
            <img
              :src="
                user.avatar.includes('storage')
                  ? backend_uri + user.avatar
                  : user.avatar
              "
              alt=""
              width="36"
              height="36"
              class="rounded-full" />
          </router-link>
        </div>
      </div>
    </Container>
  </nav>

  <modal :open="isOpen">
    <div class="flex justify-end">
      <button class="px-3 py-2 text-gray-800" @click="toggleModal"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      </button>
    </div>
    <!-- FORM -->
    <add-post />
  </modal>

</template>
<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import Container from './Container.vue'
import Modal from "./Modal.vue";
import AddPost from "../pages/Post/AddPost.vue";

export default {
  name: 'Navbar',
  components: { Container, Modal, AddPost },
  setup() {
    const store = useStore()
    const router = useRouter()

    // Dispatch an action from vuex
    const onLogout = () => {
      store.dispatch('logout', router)
    }
    // Get a data from the state getters
    const user = computed(() => store.getters.user)

    const backend_uri = `${import.meta.env.VITE_API_URI}`

    // For Modal
    const isOpen = ref(false)
    const toggleModal = () => {
      isOpen.value = !isOpen.value
    }

    return {
      onLogout,
      user,
      isOpen,
      toggleModal,
      backend_uri,
    }
  },
}
</script>
