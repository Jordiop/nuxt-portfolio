<template>
    <div class="main-container">
      <div :class="['main-element']" :style="customStyle">
        <div class="flex flex-row container-element-bar">
          <slot></slot>
        </div>
        <div class="flex flex-row container-element-bar">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  
  export default {
    name: 'slidebar',
    props: {
      barStyle: Object,
      duration: {
        type: String,
        default: '12s'
      },
      direction: {
        type: String,
        default: 'normal'
      },
      delay: {
        type: String,
        default: '2s'
      },
      paused: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const customStyle = computed(() => ({
        ...props.barStyle,
        'animation-duration': props.duration,
        'animation-direction': props.direction,
        'animation-delay': props.delay,
        'animation-play-state': props.paused ? 'paused' : 'running'
      }));
  
      return {
        customStyle
      };
    }
  };
  </script>
  
  <style scoped>
  @keyframes moveSlideshow {
    100% {
      transform: translateX(-50%);
    }
  }
  .main-container {
    width: 100%;
    overflow: hidden;
  }
  .main-element {
    transform: translate3d(0, 0, 0); 
    position: relative;
    overflow: hidden;
    animation-name: moveSlideshow;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    display: flex;
    width: max-content;
    min-width: 200%;
  }
  .container-element-bar {
    width: 50%;
  }
  </style>