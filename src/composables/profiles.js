import axios from 'axios'

import { ref } from 'vue'

export default function useProfile() {
  const profile = ref(null)
  const isLoading = ref(true)

  const getProfileByUsername = async (param) => {
    try {
      isLoading.value = true
      // Pass the authentication token
      const config = {
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      }

      const response = await axios.get(
        `${import.meta.env.VITE_API_URI}/api/profiles/${param.username}`,
        config
      )
      profile.value = response.data

      isLoading.value = false
    } catch (error) {
      console.error('Getting profile error')
    } finally {
      isLoading.value = false
    }
  }

  return {
    profile,
    getProfileByUsername,
    isLoading,
  }
}
