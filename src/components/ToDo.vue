<script setup>
import { defineProps, computed, vModelCheckbox } from "vue";
const props = defineProps({
  task: Object,
});

const deleteTask = () => {
  const res = confirm("Are you sure to delete the task?");
  if (res) props.task.deleted = true;
};
</script>

<template>
  <li>
    <label
      :class="[{ 'line-through text-gray-300 ': task.completed }]"
      class="flex justify-between items-center"
    >
      <div>
        <input
          v-show="!task.deleted"
          type="checkbox"
          v-model="task.completed"
          class="checked:bg-blue-500"
        />
        <span class="ms-2" :class="[{ 'text-rose-500': task.deleted }]">
          {{ task.label }}
        </span>
      </div>

      <button
        v-show="!task.deleted"
        :class="[
          {
            'ms-2 mt-1 bg-rose-300 hover:bg-rose-400 text-gray-700 font-semibold py-1 px-2 border border-gray-400 rounded-lg shadow': true,
          },
        ]"
        @click="deleteTask"
      >
        X
      </button>
    </label>
  </li>
</template>

<style></style>
