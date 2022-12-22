import axios from 'axios'

import { ref } from 'vue'

import Swal from 'sweetalert2'

export default function usePost() {
  const posts = ref(null)
  const isLoading = ref(true)

  const getProfilePosts = async (param) => {
    try {
      isLoading.value = true
      // Pass the authentication token
      const config = {
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      }

      const response = await axios.get(
        `${import.meta.env.VITE_API_URI}/api/profiles/${param.id}`,
        config
      )

      posts.value = response.data

      isLoading.value = false
    } catch (error) {
      console.error('Getting profile error')
    } finally {
      isLoading.value = false
    }
  }

  const addPost = async (param) => {
    try {
      // Pass the authentication token
      const config = {
        headers: {
          Authorization: `Bearer ${param.token}`,
        },
      }

      // Add Post
      await axios.post(
        `${import.meta.env.VITE_API_URI}/api/posts`,
        param.data,
        config
      )

      // Go back to profile
      param.router.push(`/profiles/${param.username}`)

      Swal.fire({
        toast: true,
        icon: 'success',
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        title: 'Post has been added.',
      })
    } catch (error) {
      console.error('Error adding post')
    }
  }

  return {
    posts,
    isLoading,
    getProfilePosts,
    addPost,
  }
}
