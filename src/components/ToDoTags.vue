<script setup>
import { defineProps, defineEmits, computed } from "vue";
const props = defineProps({
  initialTags: Array,
  selectedTag: String,
});

const emit = defineEmits(["update:selectedTag"]);

const tags = computed(() => {
  return ["All", ...new Set(props.initialTags)];
});
console.log(props.selectedTag);
</script>

<template>
  <button
    v-for="tag in tags"
    :key="tag"
    :class="[
      {
        'text-white bg-gray-800 hover:bg-gray-900 focus:outline-none  font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700': true,
        ' border-4 border-blue-300': selectedTag === tag,
      },
    ]"
    @click="emit('update:selectedTag', tag)"
  >
    {{ tag }}
  </button>
</template>

<style></style>
