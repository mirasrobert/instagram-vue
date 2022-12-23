import axios from 'axios'

import { ref } from 'vue'

export default function useFollow() {
  const users = ref([])
  const isFollowingLoading = ref(true)

  const toggleFollowProfile = async (user_id) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URI}/api/follow/${user_id}`
      )
      console.log(response.data)
    } catch (error) {
      console.error('Following profile error')
    }
  }

  const getFollowings = async (token) => {
    try {
      isFollowingLoading.value = true
      // Pass the authentication token
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }

      const response = await axios.get(
        `${import.meta.env.VITE_API_URI}/api/following`,
        config
      )

      users.value = response.data

      isFollowingLoading.value = false
    } catch (error) {
      console.error('Error Getting posts from your friends')
    } finally {
      isFollowingLoading.value = false
    }
  }

  return {
    toggleFollowProfile,
    users,
    isFollowingLoading,
    getFollowings,
  }
}
