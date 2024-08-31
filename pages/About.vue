<template>
  <div>
    <!-- About me -->
    <div class="container mx-auto">
      <AboutMe />
    </div>

  </div>
</template>

<script>
  import AboutMe from "@/components/about/AboutMe";

  export default {
    name: "About",
    components: {
      AboutMe,
    },
    data(){
      return {};
    },
    methods: {},
  };
</script>

<style scoped></style>
