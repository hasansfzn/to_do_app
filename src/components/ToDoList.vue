<script setup>
import { defineProps } from "vue";
import ToDo from "./ToDo.vue";

defineProps({
  tasks: Array,
  title: String,
});
</script>

<template>
  <section class="bg-cyan-500 shadow-lg shadow-cyan-500/50 p-3 rounded-lg">
    <h2 class="my-2 font-bold text-gray-800 text-center">{{ title }}</h2>
    <div>
      <ul class="divide-y divide-blue-200 hover:divide-blue-300 space-y-2">
        <ToDo v-for="task in tasks" :key="task.id" :task="task" />
      </ul>
    </div>
  </section>
</template>

<style></style>
