import axios from 'axios'

export default function useFollow() {
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

  return {
    toggleFollowProfile,
  }
}
