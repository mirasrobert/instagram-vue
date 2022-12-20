<template>
  <nav id="header" class="w-full py-3 bg-white">
    <Container>
      <div class="flex justify-between items-center space-x-3 md:space-x-0">
        <div class="logo">
          <img
            src="https://www.dafont.com/forum/attach/orig/7/3/737566.png?1"
            alt=""
            width="110"
            height="110"
          />
        </div>
        <div class="search">
          <form>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              class="placeholder:text-center bg-gray-100 py-1 px-2 border border-gray-400"
            />
          </form>
        </div>
        <div class="profile flex space-x-6 items-center">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
          </button>
          <button>
            <img
              src="https://randomuser.me/api/portraits/men/67.jpg"
              alt=""
              width="36"
              height="36"
              class="rounded-full"
            />
          </button>
        </div>
      </div>
    </Container>
  </nav>
</template>
<script>
import Container from './Container.vue'

export default {
  name: 'Navbar',
  components: { Container },
}
</script>
