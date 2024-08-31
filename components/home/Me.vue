<template>
    <div id="about" class="relative h-full overflow-hidden bg-white rounded-3xl">
        <div class="w-1/2 max-w-7xl">
            <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
                    fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100"></polygon>
                </svg>
    
                <div class="pt-1"></div>
    
                <div class="px-4 mt-10 mr-5 max-w-7x2 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div class="sm:text-center lg:text-left">
                        <h2 class="my-6 text-xl font-extrabold tracking-tight text-gray-400 sm:text-3xl md:text-4xl">
                            Hello, I'm <span class="text-gray-600">Jordi Osarenkhoe</span>
                        </h2>
    
                        <p class="mt-16 text-sm">
                            I'm a software engineer with a passion for building web applications. I have experience in building
                            full-stack applications using technologies like Vue.js, Nuxt.js, Node.js, and Laravel. I'm also
                            proficient in using databases like MongoDB and PostgreSQL. I'm currently learning web design and
                            animation to improve my frontend skills. 
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img class="object-cover object-top w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" src="@/assets/images/about_me.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: "Me",
};
</script>