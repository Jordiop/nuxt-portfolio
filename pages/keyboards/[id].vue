<template>
    <div class="w-full h-full p-5 bg-white rounded-3xl">
        <div class="flex flex-col justify-between w-full h-full text-gray-600">
            <span class="flex flex-row items-center text-xl">
                <img width="40" height="40" class="mr-2" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1"/>
                {{ keyboard.name }}, 
                {{ keyboard.brand }}
            </span>
            <span class="flex flex-row mt-5">
                <img width="30" height="20" class="mr-2" src="https://img.icons8.com/ios/50/thermometer--v1.png" alt="thermometer--v1"/>
                <span class="text-2xl">{{ keyboard.price }}</span>
            </span>
            <span class="flex flex-col p-2 mt-5">
                <img width="80" height="80" class="mr-2" :src="keyboard.image" :alt="keyboard.name"/>
                {{ keyboard.description }}
            </span>
        </div>
    </div>
</template>
<script>

export default {
    name: 'KeyboardWidget',
    data() {
        return {
            keyboard: null
        }
    },
  }
</script>
