<template>
    <div class="flex flex-col w-full h-full bg-white md:aspect-square rounded-3xl" @click="redirectToGithub" >
        <div class="flex flex-row items-center w-full gap-3 pt-5 pl-5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="gray">
                <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1.9 1.6 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.5-.3-5-1.3-5-5.8 0-1.3.5-2.4 1.1-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.6.8 1.1 1.9 1.1 3.2 0 4.5-2.5 5.5-5 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 0z"/>
            </svg>
            <span class="text-gray-600">Github</span>
        </div>
        <div class="mx-auto">
            <img src="@/assets/images/stack.gif" alt="Github" class="w-52 h-52">
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        redirectToGithub() {
            window.location.href = "https://github.com/jordiop";
        }
    }
}
</script>
