<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
    <post-item />
    <post-item />
    <post-item />
    <post-item />
    <post-item />
  </div>
</template>

<script>
import PostItem from '../../components/PostItem.vue'
export default {
  components: { PostItem },
}
</script>

<style></style>
