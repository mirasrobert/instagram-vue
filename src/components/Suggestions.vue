<template>
  <div>
    <user-profile />
    <p class="text-gray-600 font-semibold text-sm mt-5">Suggestions For You</p>
    <div class="flex flex-col space-y-3 mt-5">
      <user-profile />
      <user-profile />
      <user-profile />
    </div>
  </div>
</template>

<script>
import UserProfile from './UserProfile.vue'
export default {
  name: 'Suggestions',
  components: {
    UserProfile,
  },
}
</script>

<style></style>
