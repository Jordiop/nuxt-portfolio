<template>
  <div class="overflow-hidden ">
    <!-- Banner -->
    <AppBanner class="mb-5 md:h-screen md:min-h-screen sm:mb-8" />
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
