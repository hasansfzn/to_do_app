<script setup>
import { defineProps } from "vue";
defineProps({
  task: Object,
});
</script>

<template>
  <li>
    <label
      :class="[{ 'line-through text-gray-300 ': task.completed }]"
      class="flex justify-between items-center"
    >
      <div>
        <input
          type="checkbox"
          v-model="task.completed"
          class="checked:bg-blue-500"
        />
        <span class="ms-2"> {{ task.label }}</span>
      </div>
      <button
        class="ms-2 mt-1 bg-rose-700 hover:bg-rose-500 text-gray-700 font-semibold py-1 px-2 border border-gray-400 rounded-lg shadow"
        @click="deleteTask"
      >
        X
      </button>
    </label>
  </li>
</template>

<style></style>
