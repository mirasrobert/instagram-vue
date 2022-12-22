<template>
  <div class="w-full">
    <div class="post-item-wrapper">
      <a href="#">
        <img
          :src="backend_uri + post.image.url"
          alt=""
          class="w-full h-full object-cover"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PostItem',
  props: ['post'],
  setup() {
    const backend_uri = `${import.meta.env.VITE_API_URI}`

    return {
      backend_uri,
    }
  },
}
</script>

<style></style>
