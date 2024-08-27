<template>
  <div class="overflow-hidden ">
    <!-- Banner -->
    <AppBanner class="md:h-screen md:min-h-screen mb-5 sm:mb-8" />
    <!-- About -->
    <AppAbout />
    
    <!-- Projects -->
    <ProjectsGrid />

    <!-- Load more projects button -->
    <div class="flex justify-center mt-10 sm:mt-20">
      <NuxtLink
        to="/projects"
        class="flex items-center px-6 py-3 mt-32 text-lg text-white duration-300 bg-teal-600 rounded-lg shadow-lg font-general-medium hover:shadow-xl dark:bg-cyan-100 hover:bg-teal-700 dark:hover:bg-cyan-300 focus:ring-1 focus:ring-rose-600 dark:text-gray-500 sm:text-xl"
        aria-label="MoreProjects"
      >
        <Button title="More Projects" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  import AppBanner from "@/components/shared/AppBanner";
  import ProjectsGrid from "@/components/projects/ProjectsGrid.vue";
  import Button from "@/components/reusable/Button.vue";
  import AppAbout from "@/components/home/AppAbout.vue";

  export default {
    name: "Home",
    components: {
      AppBanner,
      ProjectsGrid,
      Button,
      AppAbout,
    },
  };
</script>
