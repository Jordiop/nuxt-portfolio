<template>
    <div id="about" class="relative flex flex-row h-full overflow-hidden bg-white rounded-3xl">
        <div class="w-1/2 max-w-7xl">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
                    fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100"></polygon>
                </svg>
    
                <div class="pt-1"></div>
    
                <div class="px-4 mt-10 mr-5 max-w-7x2 sm:mt-12 sm:px-6 md:mt-8 lg:mt-10 lg:px-8 xl:mt-12">
                    <div class="sm:text-center lg:text-left">
                        <h2 class="my-6 text-xl font-extrabold tracking-tight text-gray-400 sm:text-3xl md:text-3xl">
                            Hello, I'm <span class="text-gray-600">Jordi Osarenkhoe</span>
                        </h2>
                        <p class="my-6 text-base text-gray-500 sm:mt-5 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-md lg:mx-0">
                            I'm a software engineer with passion for building web apps and data representation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="absolute inset-y-0 right-0 w-1/2">
            <img class="object-cover object-top w-full h-96 sm:h-72 md:h-96 lg:h-full" src="@/assets/images/about_me.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: "Me",
};
</script>