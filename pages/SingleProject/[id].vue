<template>
    <div class="container mx-auto mt-10 sm:mt-20">
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
        console.log(this.$route.params.id);
      },
      computed: {
        projectSummary() {
          return this.projectSummaries[this.$route.param.id];
        },
        projectDetail() {
          return this.projectDetails[this.$route.param.id];
        },
      },
      methods: {},
    };
  </script>
  <style scoped></style>
  