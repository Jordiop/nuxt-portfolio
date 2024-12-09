<template>
  <div>
    <div class="w-full h-full md:cardContainer" v-if="weather">
      <div class="md:card">
        <p class="capitalize city">{{ weather.location.name || '' }}</p>
        <p class="weather">{{ weather.current.condition.text || '' }}</p>
        <img
            id="image0"
            width="100"
            height="100"
            x="0"
            y="0"
            :src="weather.current.condition.icon"
          ></img>
        <p class="temp">{{ weather.current.temp_c + 'º' || '' }}</p>
        <div class="minmaxContainer">
          <div class="min">
            <p class="minHeading">Pressure</p>
            <p class="minTemp">{{ weather.current.pressure_mb || '' }}</p>
          </div>
          <div class="max">
            <p class="maxHeading">Wind</p>
            <p class="maxTemp">{{ weather.current.wind_kph || '' }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
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

<style scoped>
  .cardContainer {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(251, 251, 251);
    border: 1px solid rgba(255, 255, 255, 0.089);
    backdrop-filter: blur(30px);
    border-radius: 15px
  }

  .cardContainerLow {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(251, 251, 251);
    border: 1px solid rgba(255, 255, 255, 0.089);
    backdrop-filter: blur(30px);
    border-radius: 15px
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    border-radius: 10px;
    cursor: pointer;
  }

  .city {
    font-weight: 700;
    font-size: 1.2em;
    letter-spacing: 1.2px;
    color: gray;
    text-transform: capitalize;
  }

  .weather {
    font-weight: 500;
    font-size: 0.7em;
    letter-spacing: 1.2px;
    color: gray;
  }

  .temp {
    font-size: 1.8em;
    color: gray;
  }

  .minmaxContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .min,
  .max {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    padding: 0px 20px;
    gap: 4px;
  }

  .max {
    align-items: flex-start;
    border-left: 2px solid gray;
  }

  .maxHeading,
  .minHeading {
    font-size: 0.7em;
    font-weight: 600;
    color: gray;
  }

  .maxTemp,
  .minTemp {
    font-size: 0.6em;
    font-weight: 500;
    color: gray;
  }

  .cardContainer::before {
    content: "";
    position: absolute;
    background-color: rgb(144, 161, 255);
    z-index: -1;
    border-radius: 50%;
    left: 100px;
    top: 50px;
    transition: all 1s;
  }

  .cardContainer:hover::before {
    transform: translate(-50px, 50px);
  }
</style>