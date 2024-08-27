<template>
    <span>
        hola
    </span>
</template>
<script>
import { getCurrentWeather } from '@/services/weather'
export default {
  name: 'WeatherWidget',
  data() {
    return {
      weather: null
    }
  },
  watch: {
    '$route.path'() { this.fetchWeather() }
  },
  beforeMount() { this.fetchWeather() },
  methods: {
    async fetchWeather() {
      try {
        const response = await getCurrentWeather()
        console.log(response)
        if (response.status === 200) {
          this.weather = await response.json()
        }
      } catch (e) {
        console.error(e)
      }
    }
  },
}
</script>