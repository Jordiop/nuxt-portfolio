<template>
    <div class="flex w-full h-full p-2 bg-gray-200 shadow-xl rounded-3xl hover:transition-transform hover:scale-105 peer">
        <div class="w-full h-full overflow-hidden bg-white rounded-3xl">
          <div
            class="w-full h-full flex flex-col gap-4 items-center p-4 border-[1px] border-gray-100 rounded-md bg-gray-50">
            <a target="_blank" rel="noreferrer" class="flex items-center w-full gap-2"
              href="https://twitter.com/jordiop26">
              <div tabindex="0">
                <div
                  class="flex items-center justify-center bg-gradient-to-b from-blue-400 to to-blue-600 border-blue-500 border-[1px] p-2 w-fit rounded-lg">
                  <slot name="icon"></slot>
                </div>
              </div>
              <div>
                <p class="text-sm font-bold text-gray-700">Jordiop</p>
                <p class="text-xs text-gray-500">@jordiop26</p>
              </div>
            </a></div>
        </div>
      </div>
</template>
<script setup>
const props = {
    title: String,
    link: String,
    username: String,
    icon: String, // icon svg path
}
</script>

