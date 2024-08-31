<template>
  <!-- Header links -->
  <div :class="isOpen ? 'block' : 'hidden'"
    class="items-start justify-start p-5 m-0 mt-5 shadow-lg sm:mt-3 sm:flex sm:flex-col sm:p-0 sm:shadow-none">

    <router-link to="/"
      class="block mb-2 text-lg font-medium text-left font-general-medium text-primary-dark dark:text-primary-light hover:text-teal-600 dark:hover:text-cyan-100 sm:mx-4 sm:py-2"
      :class="selectedRoute === '/' ? 'border-b-2 border-secondary-light dark:border-secondary-dark' : ''"
      aria-label="Home"><span class="flex flex-row items-center">
        <i data-feather="home" class="w-5 h-5 mr-2" />
        Home
      </span></router-link>
    <router-link to="/projects"
      class="block pt-3 mb-2 text-lg font-medium text-left border-t-2 font-general-medium text-primary-dark dark:text-primary-light hover:text-teal-600 dark:hover:text-cyan-100 sm:mx-4 sm:py-2 sm:pt-2 sm:border-t-0 border-secondary-light dark:border-secondary-dark"
      :class="selectedRoute === '/projects' ? 'border-b-2 border-secondary-light dark:border-secondary-dark' : ''"
      aria-label="Projects"><span class="flex flex-row items-center">
        <i data-feather="briefcase" class="w-5 h-5 mr-2" />
        Projects
      </span></router-link>
    <router-link to="/about"
      class="block pt-3 mb-2 text-lg font-medium text-left border-t-2 font-general-medium text-primary-dark dark:text-primary-light hover:text-teal-600 dark:hover:text-cyan-100 sm:mx-4 sm:py-2 sm:pt-2 sm:border-t-0 border-secondary-light dark:border-secondary-dark"
      :class="selectedRoute === '/about' ? 'border-b-2 border-secondary-light dark:border-secondary-dark' : ''"
      aria-label="About Me"><span class="flex flex-row items-center">
        <i data-feather="user" class="w-5 h-5 mr-2" />
        About
      </span></router-link>

    <div class="pt-3 border-t-2 sm:pt-0 sm:border-t-0 border-secondary-light dark:border-secondary-dark"></div>
  </div>
</template>

<script>
export default {
  name: "AppHeaderLink",
  props: ["showModal", "isOpen"],
  computed: {
    selectedRoute() {
      return this.$route.path;
    },
  },
};
</script>


<style scoped></style>
