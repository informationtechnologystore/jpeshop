<script lang="ts" setup>
const props = defineProps<{
  title: string;
  image: string;
  gender: string;
  mrp: number;
  sp: number;
  href: string;
}>();

const { title, image, gender, mrp, sp } = toRefs(props);
</script>

<template>
  <div
    class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
    :key="title"
  >
    <NuxtLink :to="href">
      <NuxtImg
        :src="image"
        :alt="title"
        class="h-80 w-72 object-contain p-2 rounded-t-xl"
      />
      <hr />
      <div class="px-4 py-3 w-72">
        <span class="text-gray-400 mr-3 uppercase text-xs">{{ gender }}</span>
        <p class="text-black truncate block capitalize">
          {{ title }}
        </p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">
            {{ "रु " + sp }}
          </p>
          <del v-if="mrp > sp">
            <p class="text-sm text-gray-600 cursor-auto ml-2">{{ mrp }}</p>
          </del>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
