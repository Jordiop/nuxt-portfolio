<template>
  <NuxtLink
    :to="{
      path: '/projects/single-project/',
      query: { id: project.id },
    }"
    class="mb-10 shadow-lg cursor-pointer h-96 rounded-xl hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-secondary-dark"
    aria-label="Single Project"
  >
    <!-- Project's display image -->
    <div>
      <img
        :src="project.displayImg"
        :alt="project.title"
        class="w-full h-64 border-none rounded-t-xl"
      />
    </div>
    <!-- Project's title and category -->
    <div class="px-4 py-6 text-center">
      <p
        class="mb-2 text-xl font-semibold font-general-semibold text-primary-dark dark:text-primary-light"
      >
        {{ project.title }}
      </p>
      <span
        class="text-lg font-general-medium text-primary-dark dark:text-primary-light"
        >{{ project.category }}</span
      >
    </div>
  </NuxtLink>
</template>

<script>
  export default {
    name: "ProjectCell",
    props: ["project"],
  };
</script>