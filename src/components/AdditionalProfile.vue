<template>
  <div class="w-full">
    <div class="flex space-x-3 mb-5">
      <p class="text-4xl">
        {{ response.profile.user.username }}
      </p>
      <follow-button
        :userId="response.profile.user.id"
        :follows="response.follows" />
    </div>
    <div class="flex space-x-6 mb-5">
      <p>
        <span class="font-bold">
          {{ response.profile.posts.length }}
        </span>
        posts
      </p>
      <p>
        <span class="font-bold">
          {{ response.profile.followers_count }}
        </span>
        followers
      </p>
      <p>
        <span class="font-bold">
          {{ response.profile.user.following_count }}
        </span>
        following
      </p>
    </div>
    <div>
      <p>
        <span class="font-bold">{{ response.profile.user.name }}.</span>
        {{ response.profile.description }}
      </p>
      <p class="text-sm font-semibold text-blue-700">
        {{ response.profile.website }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdditionalProfile',
  props: ['response'],
}
</script>

<style></style>
