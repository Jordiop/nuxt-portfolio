<template>
  <div class="grid w-full grid-cols-2 gap-3 p-10 md:h-full md:grid-cols-6 md:grid-rows-3">
    <!--IMATGE-->
    <div class="order-1 col-span-2 row-span-1 p-2 overflow-hidden bg-gray-200 md:col-span-3 aspect-square md:aspect-auto md:row-span-2 rounded-3xl md:order-1">
      <!-- sample image -->
      <Me />
    </div>
    <!--EMPTY-->
    <div
      class="flex items-center justify-center order-8 col-span-1 row-span-1 p-2 text-white bg-gray-200 shadow-xl rounded-3xl hover:transition-transform hover:scale-105 peer md:order-2">
      <div class="flex items-center justify-center w-full h-full bg-white rounded-3xl">
        <div class="flex flex-col items-center justify-center text-gray-600">
          <p class="text-xs uppercase md:text-lg font">Experience</p>
          <p class="text-4xl font-bold md:text-8xl">2</p>
          <p class="text-xs font-semibold text-center uppercase md:text-xl">years</p>
        </div>
      </div>
    </div>
    <!--WEATHER-->
    <div
      class="flex items-center justify-center order-9 col-span-2 row-span-1 p-2 text-white bg-gray-200 shadow-xl md:col-span-1 rounded-3xl hover:transition-transform hover:scale-105 peer md:order-3">
        <WeatherWidget />
    </div>
    <!--EMPTY 2-->
    <div
    class="flex flex-col items-center justify-center order-10 col-span-1 row-span-1 p-2 text-white bg-gray-200 shadow-xl rounded-3xl hover:transition-transform hover:scale-105 peer md:order-4">
    </div>
    <!--EDAD-->
    <div
      class="relative flex items-center justify-center order-2 col-span-1 row-span-1 p-2 text-gray-600 bg-gray-200 shadow-xl rounded-3xl md:order-5">
      <div class="flex items-center justify-center w-full h-full bg-white rounded-3xl">
        <div class="flex flex-col items-center justify-center">
          <p class="text-xs uppercase md:text-lg font">age</p>
          <p class="text-4xl font-bold md:text-8xl">23</p>
          <p class="text-xs font-semibold text-center uppercase md:text-xl">years old</p>
        </div>
      </div>
    </div>
    <!--TECH STACK-->
    <div
      class="flex items-center justify-center order-6 col-span-2 row-span-1 p-2 text-gray-600 duration-300 transform bg-gray-200 shadow-xl md:relative md:col-span-2 hover:transition-transform hover:scale-105 peer rounded-3xl">
      <div class="w-full h-full shadow-md rounded-3xl card-hover bg-gray-50 shadow-indigo-900/5"
        style="--x-rotation: 0.8476068806854309deg; --y-rotation: -6.7344108200621555deg;">
        <div class="w-full h-full p-6 rounded-md">
          <div class="flex items-center gap-2 leading-tight card-header"><svg class="w-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path
                d="M12.0002 4.99693V2.99609M16 5V3M8.00018 5V2.99609M12 21V19M16 21V19M8 21V19M19 16H21M19 8H21M19 12H21M3 12H5M3 16H5M3 8H5M15.0013 12.0003C15.0013 13.6578 13.6576 15.0015 12 15.0015C10.3425 15.0015 8.99878 13.6578 8.99878 12.0003C8.99878 10.3427 10.3425 8.99902 12 8.99902C13.6576 8.99902 15.0013 10.3427 15.0013 12.0003ZM6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19Z"
                stroke="gray" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>Tech Stack</div>
          <div class="flex flex-col items-start w-full h-full gap-10 py-6 font-medium text-gray-500 sm:flex-row">
            <div class="flex flex-col gap-3 text-sm">Hardware<div
                class="flex flex-col gap-2 px-1 text-xs font-normal text-gray-500">
                <p class="flex items-center gap-2 leading-tight"><svg class="w-4 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15V5Z"
                      stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
                    <path d="M2 16H22V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V16Z"
                      stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path>
                  </svg>MacBook Air M2</p>
                <p class="flex items-center gap-2 leading-tight"><svg class="w-4 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M11 5H13M7 22H17C17.5523 22 18 21.5523 18 21V3C18 2.44772 17.5523 2 17 2H7C6.44772 2 6 2.44772 6 3V21C6 21.5523 6.44772 22 7 22Z"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>S23 Ultra</p>
                <p class="flex items-center gap-2 leading-tight"><svg class="w-4 text-gray-600"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5.125 13C5.125 13.4832 5.51675 13.875 6 13.875C6.48325 13.875 6.875 13.4832 6.875 13C6.875 12.5168 6.48325 12.125 6 12.125C5.51675 12.125 5.125 12.5168 5.125 13ZM17.125 13C17.125 13.4832 17.5168 13.875 18 13.875C18.4832 13.875 18.875 13.4832 18.875 13C18.875 12.5168 18.4832 12.125 18 12.125C17.5168 12.125 17.125 12.5168 17.125 13ZM13.125 13C13.125 13.4832 13.5168 13.875 14 13.875C14.4832 13.875 14.875 13.4832 14.875 13C14.875 12.5168 14.4832 12.125 14 12.125C13.5168 12.125 13.125 12.5168 13.125 13ZM9.125 13C9.125 13.4832 9.51675 13.875 10 13.875C10.4832 13.875 10.875 13.4832 10.875 13C10.875 12.5168 10.4832 12.125 10 12.125C9.51675 12.125 9.125 12.5168 9.125 13ZM5.125 17C5.125 17.4832 5.51675 17.875 6 17.875C6.48325 17.875 6.875 17.4832 6.875 17C6.875 16.5168 6.48325 16.125 6 16.125C5.51675 16.125 5.125 16.5168 5.125 17ZM17.125 17C17.125 17.4832 17.5168 17.875 18 17.875C18.4832 17.875 18.875 17.4832 18.875 17C18.875 16.5168 18.4832 16.125 18 16.125C17.5168 16.125 17.125 16.5168 17.125 17Z"
                      fill="currentColor" stroke="currentColor" stroke-width="0.75" stroke-linecap="square"></path>
                    <path
                      d="M10 17H14M6 9V6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 4.55228 18 4V3M3 9H21C21.5523 9 22 9.44772 22 10V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V10C2 9.44772 2.44772 9 3 9Z"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>Keychron K3 V2</p>
              </div>
              <div class="flex flex-col items-start h-full gap-2 pl-1 text-xs font-normal text-gray-500 md:pl-3">
                
              </div>
            </div>
            <div class="flex flex-col gap-3 text-sm">Software<div
                class="flex flex-col items-start gap-3 sm:flex-row md:gap-2">
                <div class="flex flex-col gap-3 px-1 text-xs font-normal text-gray-500">
                  <p class="flex items-center gap-2 leading-tight"><svg class="w-4 h-4 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.66146 2C6.82146 2 5.32812 3.49333 5.32812 5.33333C5.32812 7.16852 6.81365 8.65884 8.64701 8.66664C6.81366 8.67445 5.32815 10.1648 5.32815 11.9999C5.32815 13.8399 6.82148 15.3333 8.66148 15.3333H11.9948V12.0205C12.0059 13.851 13.4949 15.3333 15.3281 15.3333C17.1681 15.3333 18.6614 13.8399 18.6614 11.9999C18.6614 10.1646 17.1757 8.67424 15.3422 8.66664C17.1757 8.65904 18.6614 7.16864 18.6614 5.33333C18.6614 3.49333 17.1681 2 15.3281 2H8.66146ZM15.3076 8.66667H11.9948V11.9794C12.0058 10.1557 13.4838 8.67769 15.3076 8.66667Z"
                        fill="currentColor"></path>
                      <path
                        d="M8.66148 22C10.5015 22 11.9948 20.5067 11.9948 18.6667V15.3333H8.66148C6.82148 15.3333 5.32815 16.8267 5.32815 18.6667C5.32815 20.5067 6.82148 22 8.66148 22Z"
                        fill="currentColor"></path>
                    </svg>Figma</p>
                  <p class="flex items-center gap-2 leading-tight"><svg stroke="currentColor" fill="currentColor"
                      stroke-width="0" viewBox="0 0 16 16" class="w-4 h-4 text-gray-600" height="1em" width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8634 13.9195C10.6568 14.0195 10.4233 14.0246 10.2185 13.9444C10.1162 13.9044 10.021 13.843 9.93997 13.7614L4.81616 9.06268L2.58433 10.7656C2.37657 10.9241 2.08597 10.9111 1.89301 10.7347L1.17719 10.0802C0.941168 9.86437 0.940898 9.49112 1.17661 9.27496L3.11213 7.5L1.17661 5.72504C0.940898 5.50888 0.941168 5.13563 1.17719 4.91982L1.89301 4.2653C2.08597 4.08887 2.37657 4.07588 2.58433 4.2344L4.81616 5.93732L9.93997 1.23855C9.97037 1.20797 10.0028 1.18023 10.0368 1.15538C10.2748 0.981429 10.5922 0.949298 10.8634 1.08048L13.5399 2.37507C13.8212 2.5111 14 2.79721 14 3.11109V8H10.752V4.53356L6.86419 7.5L10.752 10.4664V8H14V11.8889C14 12.2028 13.8211 12.4889 13.5399 12.625L10.8634 13.9195Z">
                      </path>
                    </svg>VSCode</p>
                    <!--brave browser-->
                    <p class="flex items-center gap-2 leading-tight"><svg class="w-4 h-4 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2C12.5523 2 13 2.44772 13 3V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V3C11 2.44772 11.4477 2 12 2Z"
                        fill="currentColor"></path>
                      <path
                        d="M6 6C6.55228 6 7 6.44772 7 7V17C7 17.5523 6.55228 18 6 18C5.44772 18 5 17.5523 5 17V7C5 6.44772 5.44772 6 6 6Z"
                        fill="currentColor"></path>
                      <path
                        d="M17 6C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18C16.4477 18 16 17.5523 16 17V7C16 6.44772 16.4477 6 17 6Z"
                        fill="currentColor"></path>
                    </svg>Sublime Text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--SKILLS-->
    <div
      class="flex flex-col items-center justify-between order-5 h-full col-span-2 row-span-1 p-2 text-white bg-gray-200 shadow-xl md:order-7 rounded-3xl">
      <div class="flex flex-col justify-between w-full h-full p-2 bg-gray-50 rounded-3xl">
        <p class="flex flex-row items-center justify-start gap-2 p-1 mt-3 ml-4 leading-tight text-gray-500">
          <img src="https://img.icons8.com/?size=100&id=58861&format=png&color=000000" class="w-5 h-5" />
          <span>Skills</span>
        </p>
        <div class="grid w-full grid-cols-3 gap-2 ">
          <div
            class="flex flex-col items-center justify-center p-1 rounded-lg shadow-md border-opacity-5">
            <img src="https://img.icons8.com/color/48/000000/vue-js.png" class="w-12 h-12" />
            <p class="text-xs text-gray-600">Vue.js</p>
          </div>
          <div
            class="flex flex-col items-center justify-center p-1 rounded-lg shadow-md border-opacity-5">
            <img src="https://img.icons8.com/color/48/000000/javascript.png" class="w-12 h-12" />
            <p class="text-xs text-gray-600">JavaScript</p>
          </div>
          <div
            class="flex flex-col items-center justify-center p-1 rounded-lg shadow-md border-opacity-5">
            <img src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" class="w-12 h-12" />
            <p class="text-xs text-gray-600">Tailwind CSS</p>
          </div>
      </div>
      <AppScroll />
      </div>
      
    </div>
    <!--GITHUB-->
    <div
      class="flex items-center justify-center order-7 col-span-1 row-span-1 p-2 text-white bg-gray-200 shadow-xl md:order-8 rounded-3xl hover:transition-transform hover:scale-105 peer">
      <Github />
    </div>
    <!--IDIOMES-->
    <div
    class="flex items-center justify-between order-3 col-span-1 row-span-1 p-2 text-white bg-gray-200 shadow-xl md:order-9 rounded-3xl hover:transition-transform hover:scale-105 peer">
    <div class="flex flex-col w-full h-full p-1 bg-white rounded-3xl">
        <div>
          <p class="flex flex-row items-center justify-start gap-2 p-1 mt-3 ml-4 leading-tight text-gray-500">
            <img src="https://img.icons8.com/ios/100/language.png" class="w-5 h-5" />
            <span>Languages</span>
          </p>
        </div>
        <div class="flex flex-col items-center justify-start w-full h-full md:justify-center">
          <span class="flex flex-row items-center justify-start w-full h-full mx-1 ml-20 md:ml-36">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/800px-Flag_of_Catalonia.svg.png"
              class="w-4 h-4 mr-2 md:w-8 md:h-8">
            <span class="text-xl font-bold text-gray-600">CAT</span>
          </span>
          <span class="flex flex-row items-center justify-start w-full h-full mx-1 ml-20 md:ml-36">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/800px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png"
              class="w-4 h-4 mr-2 md:w-8 md:h-8">
            <span class="text-xl font-bold text-gray-600">ESP</span>
          </span>
          <span class="flex flex-row items-center justify-start w-full h-full mx-1 ml-20 md:ml-36">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/800px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
              class="w-4 h-4 mr-2 md:w-8 md:h-8">
            <span class="text-xl font-bold text-gray-600">ENG</span>
          </span>
        </div>
      </div>
    </div>
    <!---->
    <SpotifyCard
      class="flex items-center justify-center order-9 w-full col-span-2 row-span-1 p-2 text-white bg-gray-200 shadow-xl md:order-10 rounded-3xl" />
  </div>
</template>

<script>
import feather from "feather-icons";
import AppScroll from "@/components/home/AppScroll.vue";
import SpotifyCard from "@/components/home/SpotifyCard.vue";
import Github from "@/components/home/Github.vue";
import WeatherWidget from "@/components/weather/WeatherWidget.vue";
import Me from "@/components/home/Me.vue";

export default {
  name: "AppBanner",
  data() {
    return {
      theme: "",
    };
  },
  components: {
    AppScroll,
    SpotifyCard,
    Github,
    WeatherWidget,
    Me
  },
  created() {
    this.theme = 'light'
  },
  mounted() {
    feather.replace();
    this.theme = 'light'
    console.log(process.env.SPOTIFY_CLIENT_ID)
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>



<style scoped>
.card {
  height: 100%;
  width: 320px;
  border-radius: 12px;
  padding: 24px;
  background: rgb(15 23 42);
  position: relative;
  overflow: hidden;
  display: flex;
}

.card-content {
  position: relative;
  z-index: 1;
}

.card:before {
  content: "";
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 182px;
  opacity: 0.12;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
