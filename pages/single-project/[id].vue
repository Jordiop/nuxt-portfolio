<template>
    <div class="container mx-auto">
      <!-- Project header -->
      <ProjectHeader :projectSummary="projectSummary" />
      <ProjectGallery
        v-show="projectSummary.galleryImg"
        :galleryImages="projectSummary.galleryImg"
      />
      <!-- Project information -->
      <ProjectInfo :projectDetail="projectDetail" />
    </div>
  </template>
  
  <script>
    import ProjectHeader from "@/components/projects/ProjectHeader.vue";
    import ProjectGallery from "@/components/projects/ProjectGallery.vue";
    import ProjectInfo from "@/components/projects/ProjectInfo.vue";
    import projectSummaries from "@/data/projectSummaries";
    import projectDetails from "@/data/projectDetails";
    export default {
      name: "Projects",
      components: {
        ProjectHeader,
        ProjectGallery,
        ProjectInfo,
      },
      data: () => {
        return {
          projectDetails,
          projectSummaries,
        };
      },
      mounted() {
        const route = useRoute();
        console.log(route.params.id);
      },
      computed: {
        projectSummary() {
          const route = useRoute();
          return this.projectSummaries[route.params.id];
        },
        projectDetail() {
          const route = useRoute();
          return this.projectDetails[route.params.id];
        },
      },
      methods: {},
    };
  </script>
  <style scoped></style>
  