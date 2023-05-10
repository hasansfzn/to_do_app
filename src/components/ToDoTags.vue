<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  initialTags: Array,
});
console.log(props.initialTags);
const emit = defineEmits(["update:modelValue"]);

const tags = ["All", ...new Set(props.initialTags)];
</script>

<template>
  <button v-for="tag in tags" :key="tag" :class="[{ 'px-2 py-1 my-2': true }]">
    {{ tag }}
  </button>
</template>

<style></style>
