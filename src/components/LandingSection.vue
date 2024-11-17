<template>
    <section class="h-[100vh]">
        <div class="relative w-[75vw] h-[75vh] bg-orange-800 overflow-hidden mt-12">
            <input class="hidden peer/slider1 checkbox" type="radio" name="slider" id="slider1" v-model="currentSlide"
                value="1" />
            <input class="hidden peer/slider2 checkbox" type="radio" name="slider" id="slider2" v-model="currentSlide"
                value="2" />
            <input class="hidden peer/slider3 checkbox" type="radio" name="slider" id="slider3" v-model="currentSlide"
                value="3" />

            <div
                class="relative w-[300%] h-full flex transition-all duration-500 ease-in-out peer-checked/slider1:-left-0 peer-checked/slider2:-left-[100%] peer-checked/slider3:-left-[200%]">
                <div class="relative w-full h-full flex">
                    <img src="https://placehold.co/1600" class="object-cover w-full h-full" alt="Image 1">
                    <div class="absolute bottom-4 left-4 p-4 text-white ">
                        <h1 class="xl:text-3xl text-xl font-bold tracking-tight">Text for Image 1</h1>
                        <p class="">Welcome to the club</p>
                    </div>
                </div>
                <div class="relative w-full h-full flex">
                    <img src="https://placehold.co/1600" class="object-cover w-full h-full" alt="Image 2">
                    <div class="absolute bottom-4 left-4 p-4 text-white ">
                        <h1 class="xl:text-3xl text-xl font-bold tracking-tight">Text for Image 1</h1>
                        <p>this is the club</p>
                    </div>
                </div>
                <div class="relative w-full h-full flex">
                    <img src="https://placehold.co/1600" class="object-cover w-full h-full" alt="Image 3">
                    <div class="absolute bottom-4 left-4 p-4 text-white ">
                        <h1 class="xl:text-3xl text-xl font-bold tracking-tight">Text for Image 1</h1>
                        <p>hello user</p>
                    </div>
                </div>
            </div>

            <div
                class="absolute w-full xl:flex hidden justify-center gap-2 bottom-12 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:opacity-100 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:w-10 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:opacity-100 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:w-10 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:opacity-100 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:w-10">
                <label
                    class="block w-5 h-5 bg-slate-800 cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
                    for="slider1">
                </label>
                <label
                    class="block w-5 h-5 bg-slate-800 cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
                    for="slider2">
                </label>
                <label
                    class="block w-5 h-5 bg-slate-800 cursor-pointer opacity-50 z-10 transition-all duration-300 ease-in-out hover:scale-125 hover:opacity-100"
                    for="slider3">
                </label>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LandingSection',
    data() {
        return {
            currentSlide: 1, // Default to the first slide
            autoScrollInterval: null,
        };
    },
    methods: {
        nextSlide() {
            // Cycle through the slides
            if (this.currentSlide === 3) {
                this.currentSlide = 1; // Reset to the first slide
            } else {
                this.currentSlide += 1; // Move to the next slide
            }
        }
    },
    mounted() {
        // Set up auto-scroll
        this.autoScrollInterval = setInterval(this.nextSlide, 8000); // Change slide every 5 seconds
    },
    beforeDestroy() {
        // Clean up the interval when the component is destroyed
        clearInterval(this.autoScrollInterval);
    }
};
</script>
