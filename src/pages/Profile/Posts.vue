<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
    <div v-for="(post, index) in posts" :key="index">
      <post-item :post="post" />
    </div>
  </div>
</template>

<script>
import PostItem from '../../components/PostItem.vue'
export default {
  components: { PostItem },
  props: ['posts'],
}
</script>

<style></style>
