<template>
  <Authenticated>
    <Navbar />
    <Container>
      <div
        v-if="isLoading"
        class="flex items-center justify-center min-h-screen w-full"
      >
        <clip-loader color="#1d4ed8" size="120px"></clip-loader>
      </div>
      <div v-else>
        <div class="flex justify-center my-16">
          <div class="grid md:grid-cols-[450px_minmax(650px,_1fr)_0px] gap-0">
            <div class="w-full flex justify-center mb-7 md:mb-0">
              <div class="profile-img-wrapper">
                <img
                  class="rounded-full w-full h-full object-cover"
                  :src="profile && profile.user.avatar"
                  alt="dp"
                />
              </div>
            </div>
            <div class="w-full">
              <div class="flex space-x-3 mb-5">
                <p class="text-4xl">{{ profile.user.username }}</p>
                <button
                  type="submit"
                  class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 text-center"
                >
                  Follow
                </button>
              </div>
              <div class="flex space-x-6 mb-5">
                <p><span class="font-bold"> 1,048 </span> posts</p>
                <p><span class="font-bold"> 1k </span> followers</p>
                <p><span class="font-bold"> 22 </span> following</p>
              </div>
              <div>
                <p>
                  <span class="font-bold">{{ profile.user.name }}.</span>
                  {{ profile.description }}
                </p>
                <p class="text-sm font-semibold text-blue-700">
                  {{ profile.website && profile.website }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Posts :posts="profile.posts" />
      </div>
    </Container>
  </Authenticated>
</template>

<script>
import { watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import useProfile from '../../composables/profiles'

import Container from '../../components/Container.vue'
import Navbar from '../../components/Navbar.vue'
import Authenticated from '../../components/slot/Authenticated.vue'
import Posts from './Posts.vue'

// Loader
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  components: {
    Navbar,
    Container,
    Posts,
    Authenticated,
    ClipLoader,
  },
  setup() {
    const { profile, isLoading, getProfileByUsername } = useProfile()
    const route = useRoute()
    const store = useStore()

    // Get the token from state
    const token = computed(() => store.getters.token)

    // fetch the user information when url parameter change
    watch(
      () => route.params.id,
      (username) => {
        if (username) {
          getProfileByUsername({
            token: token.value,
            username: username,
          })
        }
      },
      {
        deep: true,
        immediate: true,
      }
    )

    return {
      profile,
      isLoading,
    }
  },
}
</script>

<style></style>
