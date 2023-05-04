<script setup>
import { defineProps } from "vue";
import ToDo from "./ToDo.vue";

defineProps({
  tasks: Array,
  title: String,
});
</script>

<template>
  <section class="bg-slate-100 shadow-lg shadow-gray-500/50 p-3 rounded-lg">
    <h2 class="my-2 pb-3 font-bold text-gray-800 text-center">{{ title }}</h2>
    <p v-show="!tasks.length" class="text-gray-700 text-semibold text-center">
      No {{ title.toLocaleLowerCase() }} to show
    </p>
    <div>
      <ul class="divide-y divide-blue-200 hover:divide-blue-300 space-y-2">
        <ToDo
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          :title="title"
        />
      </ul>
    </div>
  </section>

  <!-- this for hudai  -->
</template>

<style></style>
