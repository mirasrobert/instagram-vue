import axios from 'axios'

import {ref} from 'vue'

import Swal from 'sweetalert2'

import {useRouter} from 'vue-router'
import profile from "../pages/Profile/Profile.vue";

export default function useProfile() {
    const response = ref(null)
    const isLoading = ref(true)

    const isSaving = ref(false)

    const router = useRouter()

    const getProfileByUsername = async (param) => {
        try {
            isLoading.value = true
            // Pass the authentication token
            const config = {
                headers: {
                    Authorization: `Bearer ${param.token}`,
                },
            }

            const res = await axios.get(
                `${import.meta.env.VITE_API_URI}/api/profiles/${param.username}`,

                config
            )
            response.value = res.data

            isLoading.value = false
        } catch (error) {
            console.error('Getting profile error')
        } finally {
            isLoading.value = false
        }
    }

    const updateProfile = async (param) => {
        try {
            isSaving.value = true

            const config = {
                headers: {
                    Authorization: `Bearer ${param.token}`,
                },
            }

            // Response is from ref so no need to pass form data on param
            const fields = {
                name: response.value.profile.user.name,
                email: response.value.profile.user.email,
                username: response.value.profile.user.username,
                description: response.value.profile.description,
                website: response.value.profile.website,
            }

            // Create FormData Object
            const formData = new FormData()
            formData.append('_method', 'PUT') // For Laravel FormData To Work for PUT|PATCH
            formData.append('name', response.value.profile.user.name)
            formData.append('email', response.value.profile.user.email)
            formData.append('username', response.value.profile.user.username)
            formData.append('description', response.value.profile.description)
            formData.append('website', response.value.profile.website)
            formData.append('image', param.image)

            await axios.post(
                `${import.meta.env.VITE_API_URI}/api/profiles/${param.username}`, formData,
                config
            )

            // Redirect back to profile
            await router.push({
                name: 'profile',
                params: {id: response.value.profile.user.username},
            })

            Swal.fire({
                toast: true,
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Profile has been updated.',
            })

            isSaving.value = false
        } catch (error) {
            Swal.fire({
                toast: true,
                icon: 'error',
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Error updating profile. Please try again.',
            })

            console.log(error)

            isSaving.value = false
        }
    }

    return {
        response,
        getProfileByUsername,
        updateProfile,
        isLoading,
        isSaving,
    }
}
