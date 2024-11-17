<template>
    <section class="h-[75vh] w-[100vw] relative bg-primary-beige">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 320" class="absolute top-0 w-full xl:block hidden ">
            <path fill="#01284F"
                d="M0,160L80,180C160,200,320,240,480,220C640,200,800,120,960,100C1120,80,1280,160,1360,200L1440,240L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
        </svg>
        <div class="flex flex-col gap-20">
            <div class="text-center flex flex-col items-center justify-center">
                <h1 class="text-3xl font-bold m-10 text-white z-10">At a Glance</h1>
                <img src="https://gonzaga.azureedge.net/ui/images/svg-icons/dotted-line-long.svg" alt="" class="z-10">
            </div>
            <div class="flex flex-col xl:flex-row justify-center gap-10">
                <div class="flex justify-center items-center  xl:w-[40%] z-10 bg-primary-beige p-20 rounded-xl">
                    HELLO
                </div>
                <div class="flex justify-center items-center  xl:w-[40%] z-10 bg-primary-beige p-20 rounded-xl">
                    HELLO
                </div>
            </div>
            <div class="flex flex-col xl:flex-row justify-center gap-10">
                <div class="flex justify-center items-center  xl:w-[40%] z-10 bg-white p-20">
                    HELLO
                </div>
                <div class="flex justify-center items-center  xl:w-[40%] z-10 bg-white p-20">
                    HELLO
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AtAGlance',
}
</script>