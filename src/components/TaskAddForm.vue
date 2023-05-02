<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["addTask"]);
let newTask = ref("");

const addTask = () => {
  emit("addTask", newTask.value);
  newTask.value = "";
};
</script>

<template>
  <form @submit.prevent="addTask" class="flex items-center justify-center">
    <input
      type="text"
      v-model="newTask"
      class="p-2 bg-white text-gray-700 shadow-sm shadow-slate-300 focus:outline-none"
      placeholder="Enter New Task"
    />
    <button
      type="submit"
      class="p-2 bg-white border-l-4 border-indigo-500 shadow-sm shadow-slate-300"
      :disabled="!newTask.length"
    >
      Add
    </button>
  </form>
</template>

<style></style>
