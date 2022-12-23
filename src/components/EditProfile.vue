<template>
  <Authenticated>
    <Navbar />
    <Container>
      <form class="mt-20" @submit.prevent="onSubmit">
        <h2 class="text-gray-800 font-bold text-4xl mb-5">Add Post</h2>
        <div class="mb-4">
          <input
            type="caption"
            id="caption"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
            placeholder="Caption"
            required
            v-model="form.caption" />
        </div>
        <div class="mb-6">
          <input
            @change="handleOnChangeImage"
            accept="image/*"
            type="file"
            id="Image"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm block w-full p-2.5"
            placeholder="Image"
            required />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </Container>
  </Authenticated>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import usePost from '../../composables/posts'

import Container from '../../components/Container.vue'
import Navbar from '../../components/Navbar.vue'
import Authenticated from '../../components/slot/Authenticated.vue'

export default {
  components: {
    Navbar,
    Container,
    Authenticated,
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const { addPost } = usePost()

    const form = ref({
      caption: '',
      image: null,
    })

    const handleOnChangeImage = (e) => {
      form.value.image = e.target.files[0]
    }

    // From VueX State
    const token = computed(() => store.getters.token)
    const user = computed(() => store.getters.user)

    const onSubmit = () => {
      // Create FormData Object
      const formData = new FormData()
      formData.append('caption', form.value.caption)
      formData.append('image', form.value.image)

      addPost({
        token: token.value,
        data: formData,
        router: router,
        username: user.value.username,
      })
    }

    return {
      form,
      onSubmit,
      handleOnChangeImage,
    }
  },
}
</script>

<style></style>
