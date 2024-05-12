<script lang="ts" setup>
const props = defineProps<{
  text: string;
}>();

const { text } = toRefs(props);
</script>
<template>
  <h1 class="text-xl pt-8 font-semibold">{{ text }}</h1>
  <section
    class="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-8 mt-10 mb-5"
  >
    <slot></slot>
  </section>
</template>
