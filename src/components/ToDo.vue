<script setup>
import { defineProps } from "vue";
defineProps({
  task: Object,
});
</script>

<template>
  <li>
    <label :class="[{ 'line-through text-gray-300 ': task.completed }]">
      <input
        type="checkbox"
        v-model="task.completed"
        class="checked:bg-blue-500"
      />
      <span class="ms-2"> {{ task.label }}</span>
    </label>
  </li>
</template>

<style></style>
