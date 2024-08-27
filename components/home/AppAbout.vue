<template>
<section id="about" class="overflow-hidden text-clrSecondary">
    <div class="mx-auto max-w-7xl">
    <h2
        class="text-3xl font-bold text-center text-clrSecondary md:text-left md:text-4xl"
    >
        ~ whoami
    </h2>
    <div
        class="flex flex-col-reverse gap-5 text-center md:text-left md:flex-row"
    >
        <div
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        class="w-full md:w-1/2"
        >
        <p class="max-w-2xl mx-auto leading-8 text-gray-500">
            Hi, I’m Jordi. Frontend developer. I loved Computer Science since I was I child, which led me to learn programming. <br /><strong
            >My tech stack in short includes: JavaScript, TypeScript, VueJS and Nuxt,
            Tailwind, CSS.</strong
            >
        </p>
        <br />
        <button
            v-show="!readMore"
            @click="readMore = !readMore"
            class="text-clrAccent"
        >
            <u> Read More</u>
        </button>
        <Transition name="slide-fade">
            <div v-show="readMore">
            <p class="max-w-2xl mx-auto leading-8 text-gray-500 ">
                It all started with disassembling my first computer when I was 10.
                I was curious about how it works, so I started learning about it.
                I was a self-taught kid, and I learned a lot about computers and the
                internet. I was a gamer, so I learned how to install games and
                drivers, and how to fix the computer when it was broken. I was
                interested in how the internet works, so I learned HTML and CSS.
                <br />
                In highschool, I learned Python, but I was not so into it. I was
                more interested in web development. I started learning about user experience and user interface design. 
                Then, I started my degree in Web Development, called CFGS Web App Development in Spain. After ending the degree,
                I joined Omniaccess as an Intern and 3 months later, as a Full Stack Junior.
                <br />
            </p>
            <button @click="readMore = !readMore" class="text-clrAccent">
                <u>Hide it, please</u>
            </button>
            </div>
        </Transition>
        </div>
        <div class="md:w-1/2">
        <div class="w-full px-10 lg:px-20">
            <img
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            class="rounded-md md:w-full lazy"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREWupYCLM0Sx-BnTAFiYLdTFi8QxR1Sv4OEw&s"
            alt="Jordi Osarenkhoe Petro Profile Photo"
            />
        </div>
        <p
            class="mt-2 text-sm leading-8 sm:text-center text-clrSecondaryLight"
        >

        </p>
        </div>
    </div>
    </div>
</section>
</template>

<script setup>
import { ref } from 'vue';

const readMore = ref(false);
</script>

<style>
.slide-fade-enter-active {
transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
transform: translateX(20px);
opacity: 0;
}
</style>
