<template>
  <div class="grid grid-cols-1 md:grid-cols-7" :class="appTheme" >
    <NuxtRouteAnnouncer />
    <NuxtPage class="h-full min-h-screen col-span-1 overflow-y-scroll md:col-span-7"/> 
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
