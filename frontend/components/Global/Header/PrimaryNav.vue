<script setup>
    const currencies = ['NPR']
</script>

<template>
    <div class="bg-gray-900">
          <div class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
            <!-- Currency selector -->
            <form>
              <div>
                <label for="desktop-currency" class="sr-only">Currency</label>
                <div class="-ml-2 group relative bg-gray-900 border-transparent rounded-md">
                  <select id="desktop-currency" name="currency" class="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent">
                    <option v-for="currency in currencies" :key="currency">{{ currency }}</option>
                  </select>
                </div>
              </div>
            </form>

            <div class="flex items-center space-x-6">
              <NuxtLink to="/auth/signin" class="text-sm font-medium text-white hover:text-gray-100">Sign in</NuxtLink>
              <span class="h-6 w-px bg-gray-600" aria-hidden="true" />
              <NuxtLink to="/auth/signup" class="text-sm font-medium text-white hover:text-gray-100">Create an account</NuxtLink>
            </div>
          </div>
        </div>
</template>