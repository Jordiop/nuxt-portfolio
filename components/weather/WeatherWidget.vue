<template>
    <div class="flex flex-col w-full h-full p-5 bg-white rounded-3xl" v-if="weather">
        <div class="w-full text-gray-600">
          <!--location icon-->
          <span class="flex flex-row items-center text-xl">
            <img width="40" height="40" class="mr-2" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1"/>
            {{ weather.location.name }}, 
            {{ weather.location.region }}
          </span>
          <span class="flex flex-row mt-5">
            <!--temperature icon-->
            <img width="30" height="20" class="mr-2" src="https://img.icons8.com/ios/50/thermometer--v1.png" alt="thermometer--v1"/>
            <span class="text-2xl">{{ weather.current.temp_c }}°C</span>
          </span>
          <span class="flex flex-row mt-5">
            <!--weather icon-->
            <img width="50" height="50" class="mr-2" :src="weather.current.condition.icon" :alt="weather.current.condition.text"/>
            {{ weather.current.condition.text }}
          </span>
        </div>
    </div>
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
  mounted() {
    this.fetchWeather()
  },
  methods: {
    async fetchWeather() {
      try {
        const response = await getCurrentWeather()
        this.weather = await response
      } catch (e) {
        console.error(e)
      }
    }
  },
}
</script>