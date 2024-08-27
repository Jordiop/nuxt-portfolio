<template>
  <div class="grid grid-cols-1 md:grid-cols-7" :class="appTheme" >
    <NuxtRouteAnnouncer />
    <AppHeader class="sticky md:left-0 z-10 md:col-span-1 p-3 md:h-96"/>
    <NuxtPage class="min-h-screen col-span-6 overflow-y-scroll"/> 
  </div>
</template>
<script> 
import AppHeader from "./components/shared/AppHeader";
import AppFooter from "./components/shared/AppFooter"
export default {
    name: "App",
    components: {
      AppHeader,
      AppFooter,
    },
    data: () => {
      return {
        appTheme: "light",
      };
    },
  };  
</script>
