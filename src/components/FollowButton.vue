<template>
  <button
    @click="followProfile"
    type="button"
    class="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-3 text-center"
  >
    {{ buttonText }}
  </button>
</template>

<script>
import { ref, computed } from 'vue'
import axios from 'axios'
export default {
  name: 'FollowButton',
  props: ['userId', 'follows'],
  setup(props) {
    const isFollows = ref(props.follows)

    // Follow and Unfollow
    const followProfile = () => {
      axios
        .post(`${import.meta.env.VITE_API_URI}/api/follow/${props.userId}`)
        .then((response) => {
          // Change value of follows into opposite
          isFollows.value = !isFollows.value
          console.log(response.data)
        })
        .catch((err) => console.error('Following profile error'))
    }

    // Change Button Text
    const buttonText = computed(() => {
      return isFollows.value ? 'Unfollow' : 'Follow'
    })

    return {
      followProfile,
      buttonText,
    }
  },
}
</script>

<style></style>
