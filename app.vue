<template>
  <div class="grid grid-cols-1 md:grid-cols-7" :class="appTheme" >
    <NuxtRouteAnnouncer />
    <AppHeader class="sticky z-10 p-3 md:left-0 md:col-span-1 md:h-96"/>
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
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
