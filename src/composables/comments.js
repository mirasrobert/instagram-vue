import axios from 'axios'

import {ref} from 'vue'
import {useRouter} from "vue-router";

import Swal from 'sweetalert2'

export default function useComment() {
    const router = useRouter()
    const isProcessing = ref(false)


    const addComment = async (token, postId, data) => {
        try {
            isProcessing.value = true
            // Pass the authentication token
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }

            // Add Post
            await axios.post(
                `${import.meta.env.VITE_API_URI}/api/comments/${postId}`,
                data,
                config
            )

            Swal.fire({
                toast: true,
                icon: 'success',
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                title: 'Comment has been added.',
            })

            await router.push({name: 'posts.show', params: {id: postId}})

        } catch (error) {
            console.error('Error adding comment')
        } finally {
            isProcessing.value = false
        }
    }

    return {
        isProcessing,
        addComment
    }
}
