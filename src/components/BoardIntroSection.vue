<template>
    <section class="w-[100vw] bg-fourth-blue">
        <div class="text-center m-10">
            <h1 class="text-3xl font-bold">Meet the Board</h1>
        </div>
        <div class="flex flex-row gap-x-16 justify-center">
            <div class="flex flex-col items-center">
                <div class="w-40 h-40 rounded-full overflow-hidden bg-gray-300 border-4 border-gray-400">
                    <img src="https://placehold.co/150" alt="Board Member 1" class="w-full h-full object-cover">
                </div>
                <p class="mt-4 text-lg font-semibold text-gray-700">Board Member 1</p>
                <p class="text-sm text-gray-500">Position</p>
            </div>

            <div class="flex flex-col items-center">
                <div class="w-40 h-40 rounded-full overflow-hidden bg-gray-300 border-4 border-gray-400">
                    <img src="https://placehold.co/150" alt="Board Member 2" class="w-full h-full object-cover">
                </div>
                <p class="mt-4 text-lg font-semibold text-gray-700">Board Member 2</p>
                <p class="text-sm text-gray-500">Position</p>
            </div>

            <div class="flex flex-col items-center">
                <div class="w-40 h-40 rounded-full overflow-hidden bg-gray-300 border-4 border-gray-400">
                    <img src="https://placehold.co/150" alt="Board Member 3" class="w-full h-full object-cover">
                </div>
                <p class="mt-4 text-lg font-semibold text-gray-700">Board Member 3</p>
                <p class="text-sm text-gray-500">Position</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'IntroSection',
}
</script>