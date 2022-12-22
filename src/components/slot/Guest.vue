<template>
  <slot></slot>
</template>

<script>
import { mapGetters } from 'vuex'
import router from '../../router'
export default {
  name: 'Guest',
  computed: {
    ...mapGetters['authenticated'],
  },
  created() {
    if (this.$store.getters.authenticated) {
      router.replace('/')
    }
  },
}
</script>
