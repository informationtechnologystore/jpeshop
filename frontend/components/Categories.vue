<script setup>
const categories = [
  {
    name: "New Arrivals",
    href: "/new-arrivals",
    imageSrc: "/categories/new-arrival.png",
  },
  {
    name: "Clothings",
    href: "/clothings",
    imageSrc: "/categories/clothing.png",
  },
  {
    name: "Accessories",
    href: "/accessories",
    imageSrc: "/categories/accessories.jpg",
  },
  {
    name: "Carry",
    href: "/carry",
    imageSrc: "/categories/carry.jpg",
  },
  {
    name: "Offers",
    href: "/top-deals",
    imageSrc: "/categories/top-deals.jpg",
  },
];
</script>

<template>
  <section
    aria-labelledby="category-heading"
    class="pt-10 xl:max-w-7xl xl:mx-auto xl:px-8"
  >
    <div>
      <h2
        id="category-heading"
        class="text-2xl font-bold tracking-tight text-gray-900"
      >
        Shop by Category
      </h2>
    </div>

    <div class="mt-4 flow-root">
      <div class="my-2">
        <div
          class="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible overflow-y-hidden pb-8"
        >
          <div
            class="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8"
          >
            <NuxtLink
              v-for="category in categories"
              :key="category.name"
              :to="category.href"
              class="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
            >
              <span aria-hidden="true" class="absolute inset-0">
                <NuxtImg
                  :src="category.imageSrc"
                  alt=""
                  class="w-full h-full object-center object-cover"
                />
              </span>
              <span
                aria-hidden="true"
                class="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-900 opacity-60"
              />
              <span
                class="relative mt-auto text-center text-xl font-semibold text-white"
                >{{ category.name }}</span
              >
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
