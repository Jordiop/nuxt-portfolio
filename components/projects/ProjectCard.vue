<template>
    <div class="flex h-screen antialiased bg-gray-900">
        <div class="relative m-auto">
          <div class="z-50 grid max-w-xs grid-cols-1 p-3 mt-10 bg-gray-400 rounded shadow-lg cursor-default select-none w-xs dark:bg-gray-900">
            <div class="mb-2 ml-2 text-xl font-semibold text-gray-900 dark:text-white">Project Name</div>
            <div class="flex">
              <button
                class="px-2 py-1 mx-2 text-sm font-semibold text-white transform bg-gray-900 rounded mouse-pointer hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Live</button>
              <button
                class="px-2 text-sm font-semibold text-white transform bg-gray-900 rounded mouse-pointer hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90 dark:focus:bg-gray-600 focus:outline-none">Code</button>
            </div>
            <div class="mx-2 my-2 mr-5">
              <p class="text-sm text-gray-900">
                A brief description of what the project is and what it does and technologies used.
              </p>
            </div>
            <div>
              <div class="font-semibold text-gray-900 text-l">Tech Stack:</div>
              <div>
                  <span class="inline-block px-1 py-1 text-xs font-thin text-blue-900 transition-all duration-150 transform bg-blue-400 bg-opacity-75 rounded hover:shadow-sm hover:scale-105">ReactJS</span>
                <span class="inline-block px-1 py-1 text-xs font-thin text-pink-900 transition-all duration-150 transform bg-pink-400 bg-opacity-100 rounded hover:shadow-sm hover:scale-105">Tailwind</span>
                <span class="inline-block px-1 py-1 text-xs font-thin text-yellow-900 transition-all duration-150 transform bg-yellow-400 bg-opacity-75 rounded hover:shadow-sm hover:scale-105">Javascript</span>
              </div>
            </div>
          </div>
              <img
            class="absolute z-0 object-cover object-top h-64 max-w-xs -my-56 transition-all duration-150 transform border border-gray-600 border-opacity-50 shadow-lg mx-72 w-xl hover:bg-opacity-50 hover:scale-125 rounded-xl"
            src="https://camo.githubusercontent.com/78889a2ff752043bd00ea43b0dc9fb85b8818345e190b2af5ce4d4eff307db64/68747470733a2f2f692e696d6775722e636f6d2f645744334449522e6a7067">
          </img>
        </div>
        </div>
</template>
<script>
export default {
    name: "ProjectCard",
};
</script>