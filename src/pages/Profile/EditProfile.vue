<template>
  <Authenticated>
    <Navbar />
    <Container>
      <div
        v-if="isLoading"
        class="flex items-center justify-center min-h-screen w-full">
        <clip-loader color="#1d4ed8" size="120px"></clip-loader>
      </div>
      <div class="my-20" v-else>
        <form class="mb-20" @submit.prevent="saveProfile">
          <h2 class="text-gray-800 font-bold text-4xl mb-7">Edit Profile</h2>
          <div class="mb-4">
            <div class="flex space-x-6">
              <div>
                <label
                  for="avatar"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Change avatar</label
                >

                <input
                  @change="handleOnChangeImage"
                  accept="image/*"
                  type="file"
                  id="Image"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
                  placeholder="Image" />
              </div>
              <div>
                <img
                  :src="
                    response.profile.user.avatar.includes('storage')
                      ? backend_uri + response.profile.user.avatar
                      : response.profile.user.avatar
                  "
                  class="h-32 w-32 rounded-full"
                  alt="" />
              </div>
            </div>
          </div>
          <div class="mb-4">
            <label
              for="avatar"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Full Name</label
            >
            <input
              type="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
              placeholder="Full Name"
              v-model="response.profile.user.name" />
          </div>
          <div class="mb-4">
            <label
              for="avatar"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Username</label
            >
            <input
              type="username"
              id="username"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
              placeholder="Username"
              v-model="response.profile.user.username" />
          </div>
          <div class="mb-4">
            <label
              for="avatar"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Email</label
            >
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
              placeholder="Email"
              v-model="response.profile.user.email" />
          </div>
          <div class="mb-4">
            <label
              for="avatar"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Website</label
            >
            <input
              type="website"
              id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
              placeholder="Your website"
              v-model="response.profile.website" />
          </div>
          <div class="mb-6">
            <label
              for="avatar"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Description</label
            >
            <textarea
              placeholder="Your profile description or caption"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
              rows="4"
              v-model="response.profile.description"></textarea>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-75"
            :disabled="isSaving === true">
            Save Changes
          </button>
        </form>
        <form>
          <h2 class="text-gray-800 font-bold text-4xl mb-7">Update password</h2>
          <div class="mb-4">
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
              placeholder="Password"
              v-model="response.password" />
          </div>
          <div class="mb-4">
            <input
              type="password"
              id="password_confirmation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
              placeholder="Confirm Password"
              v-model="response.password_confirmation" />
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Update password
          </button>
        </form>
      </div>
    </Container>
  </Authenticated>
</template>

<script>
import { ref, watch, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import useProfile from '../../composables/profiles'

import Authenticated from '../../components/slot/Authenticated.vue'
import Container from '../../components/Container.vue'
import Navbar from '../../components/Navbar.vue'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  components: {
    Authenticated,
    Navbar,
    Container,
    ClipLoader,
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const {
      response,
      isLoading,
      isSaving,
      getProfileByUsername,
      updateProfile,
    } = useProfile()

    const form = ref({
      image: '',
    })

    const handleOnChangeImage = (e) => {
      form.value.image = e.target.files[0]
    }

    // Get the token from state
    const token = computed(() => store.getters.token)

    // Fetch profile info
    watch(
      () => route.params.id,
      (urlparam) => {
        getProfileByUsername({
          token: token.value,
          username: urlparam,
        })
      },
      {
        deep: true,
        immediate: true,
      }
    )

    // Update profile
    const saveProfile = async () => {
      await updateProfile({
        token: token.value,
        username: route.params.id,
        image: form.value.image,
      })
    }

    const backend_uri = `${import.meta.env.VITE_API_URI}`

    return {
      form,
      handleOnChangeImage,
      response,
      isLoading,
      isSaving,
      backend_uri,
      saveProfile,
    }
  },
}
</script>
