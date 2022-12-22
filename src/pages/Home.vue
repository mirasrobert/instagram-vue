<template>
  <Authenticated>
    <Navbar />

    <section class="my-10">
      <Container>
        <div
          class="grid grid-col-1 md:grid-cols-[650px_minmax(350px,_1fr)_0px] gap-0"
        >
          <div>
            <post-card />
            <post-card />
          </div>
          <div class="hidden md:block">
            <suggestions />
          </div>
        </div>
      </Container>
    </section>
  </Authenticated>
</template>

<script>
import Container from '../components/Container.vue'
import Navbar from '../components/Navbar.vue'
import PostCard from '../components/PostCard.vue'
import Suggestions from '../components/Suggestions.vue'
import Authenticated from '../components/slot/Authenticated.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    PostCard,
    Container,
    Suggestions,
    Authenticated,
  },
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
