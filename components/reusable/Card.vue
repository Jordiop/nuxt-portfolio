<template>
    <div class="flex items-center justify-center w-full h-full bg-white rounded-3xl">
        <div class="flex flex-col items-center justify-center">
            <p class="text-xs uppercase md:text-lg font">{{ subtitle }}</p>
            <p class="text-4xl font-bold md:text-8xl">{{ content }}</p>
            <p class="text-xs font-semibold text-center uppercase md:text-xl">{{ title }}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Card",

        props: {
            title: {
                type: String,
                default: "",
            },
            subtitle: {
                type: String,
                default: "",
            },
            content: {
                type: String,
                default: "",
            },
        },
    };
</script>