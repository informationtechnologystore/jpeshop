<template>
  <div
    class="bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 px-6 sm:py-20 py-10 font-[sans-serif] rounded-lg mb-8"
  >
    <div class="max-w-screen-xl mx-auto text-center text-white">
      <h1 class="text-5xl max-sm:text-3xl font-extrabold leading-tight mb-4">
        Welcome to JALPA
      </h1>
      <p class="text-lg mb-8">where FASHION meets PEOPLE.</p>
      <div class="mt-12 sm:flex sm:justify-center">
        <div class="rounded-md shadow">
          <NuxtLink
            to="#explore"
            class="w-full flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-indigo-600 bg-white hover:text-indigo-500 hover:bg-indigo-100 transition duration-150 ease-in-out"
          >
            Start Exploring
          </NuxtLink>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-4">
          <NuxtLink
            to="/bestsellers"
            class="w-full flex items-center justify-center px-8 py-3 text-base font-semibold rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition duration-150 ease-in-out"
          >
            View BestSeller's
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
