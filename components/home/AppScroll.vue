<template>
  <slidebar>
    <div v-for="technology in technologies" :key="technology.key">
      <div class="pt-4 mx-8">
        <img class="p-1 max-h-8 max-w-8" :src="technology.source">
      </div>
    </div>
  </slidebar>
</template>

<script>
import slidebar from '../utils/slidebar.vue'

export default {
  components: {
    slidebar
  },
  data() {
    return {
      technologies: [
        {
          key: 'vue',
          name: 'Vue.js',
          source: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
        },
        {
          key: 'nuxt',
          name: 'Nuxt.js',
          source: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg'
        },
        {
          key: 'javascript',
          name: 'JavaScript',
          source: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
        },
        {
          key: 'typescript',
          name: 'TypeScript',
          source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png'
        },
        {
          key: 'tailwind',
          name: 'Tailwind CSS',
          source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/512px-Tailwind_CSS_Logo.svg.png'
        },
        {
          key: 'laravel',
          name: 'Laravel',
          source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/50px-Laravel.svg.png'
        }
      ]
    }
  }
}
</script>

<style>
.items {
  display: flex;
  justify-content: space-around;
}
</style>