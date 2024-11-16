<template>
    <div
      class="min-h-screen bg-grid-pattern bg-grid-size"
      @mousemove="handleMouseMove"
      :style="bgStyle"
    >
        <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: "BackgroundPattern",
    data() {
      return {
        mouseX: 0,
        mouseY: 0,
      };
    },
    computed: {
      bgStyle() {
        const offsetX = this.mouseX * 0.02; 
        const offsetY = this.mouseY * 0.02;
        return {
          backgroundPosition: `${offsetX}px ${offsetY}px`,
        };
      },
    },
    methods: {
      handleMouseMove(event) {
        this.mouseX = event.clientX - window.innerWidth / 2;
        this.mouseY = event.clientY - window.innerHeight / 2;
      },
    },
  };
  </script>
  
  <style>
  .bg-grid-pattern {
    transition: background-position 0.05s ease; 
    background-color: #edeef2ca;
  }
  </style>

