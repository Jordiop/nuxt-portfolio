<template>
  <nav id="nav" class="sticky top-0 flex flex-col justify-start w-full">
    <!-- Header start -->
    <div
      class="z-10 flex flex-col items-start justify-between w-full my-6 ml-6 sm:"
    >
      <!-- Header menu links and small screen hamburger menu -->
      <div class="w-full px-4 sm:hidden sm:px-0">
        <!-- Header logos -->

        <div class="flex items-center justify-between w-full">
          <!-- Theme switcher small screen -->

          <!-- Small screen hamburger menu -->
          <div class="sm:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="ml-1 focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="fill-current h-7 w-7 text-secondary-dark dark:text-secondary-light"
              >
                <path
                  v-if="isOpen"
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  clip-rule="evenodd"
                ></path>
                <path
                  v-if="!isOpen"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>

          <div>
            <a href="/" class="flex items-center w-full">
              <span
                class="text-2xl font-general-semibold text-primary-dark dark:text-primary-light sm:text-3xl"
                >J</span
              >
            </a>
          </div>

         <!--  <theme-switcher
            :theme="theme"
            @themeChanged="updateTheme"
            class="
              block
              sm:hidden
              bg-secondary-light
              dark:bg-secondary-dark
              hover:bg-hover-light
              dark:hover:bg-hover-dark
              hover:shadow-sm
              px-2.5
              py-2
              rounded-lg
            "
          /> -->
        </div>
      </div>

      <div>
        <a href="/" class="items-center hidden w-full sm:flex">
          <span
            class="text-2xl font-general-semibold text-primary-dark dark:text-primary-light sm:text-3xl"
            ></span
          >
        </a>
      </div>

      <!-- Header links -->
      <AppHeaderLinks :showModal="showModal" :isOpen="isOpen" class="" />

      <!-- Header right section buttons -->
      <div
        class="flex-col items-center justify-between hidden sm:flex md:flex-col "
      >
        <!-- Theme switcher large screen -->
        <!-- <theme-switcher
          :theme="theme"
          @themeChanged="updateTheme"
          class="px-3 py-2 ml-8 shadow-sm cursor-pointer bg-secondary-light dark:bg-secondary-dark rounded-xl"
        /> -->
      </div>
    </div>
  </nav>
</template>



<script>
  import feather from "feather-icons";
  import AppHeaderLinks from "./AppHeaderLinks.vue";

  export default {
    name: "AppHeader",
    components: {
      AppHeaderLinks,
    },
    data() {
      return {
        isOpen: false,
        theme: "",
        modal: false,
      };
    },

    created() {
      this.theme = "light";
    },
    mounted() {
      feather.replace();
      this.theme = "light";
    },
    methods: {
      updateTheme(theme) {
        this.theme = theme;
      },
      showModal() {
        if (this.modal) {
          // Stop screen scrolling
          document
            .getElementsByTagName("html")[0]
            .classList.remove("overflow-y-hidden");
          this.modal = false;
        } else {
          document
            .getElementsByTagName("html")[0]
            .classList.add("overflow-y-hidden");
          this.modal = true;
        }
      },
    },
    updated() {
      feather.replace();
    },
  };
</script>

<style lang="css">
</style>
