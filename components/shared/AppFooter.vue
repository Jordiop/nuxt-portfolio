<template>
  <div class="container mx-auto">
    <div
      class="pt-10 pb-4 mt-10 border-t-2 sm:pt-15 border-secondary-light dark:border-secondary-dark"
    >
      <!-- Footer social links -->
      <div class="flex flex-col items-center justify-center mb-5 sm:mb-10">
        <p
          class="mb-5 text-xl font-semibold font-general-semibold sm:text-2xl text-primary-dark dark:text-primary-light"
        >
          Follow me
        </p>
        <template class="flex gap-4 sm:gap-8">
          <a
            v-for="social in socials"
            :key="social.id"
            :href="social.url"
            target="_blank"
            class="p-4 text-gray-400 duration-500 rounded-lg shadow-sm cursor-pointer hover:text-teal-600 dark:hover:text-cyan-100 bg-primary-light dark:bg-primary-dark hover:bg-gray-100"
          >
            <i :data-feather="social.icon" class="w-5 h-5 sm:w-8 sm:h-8"></i>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import feather from "feather-icons";
  export default {
    name: "AppFooter",
    data() {
      return {
        socials: [
          {
            id: 1,
            name: "GitHub",
            icon: "github",
            url: "https://github.com/jordiop",
          },
          {
            id: 2,
            name: "Linkedin",
            icon: "linkedin",
            url: "https://www.linkedin.com/in/jordiop",
          },
        ],
      };
    },
    mounted() {
      feather.replace();
    },
    updated() {
      feather.replace();
    },
  };
</script>



<style scoped></style>
