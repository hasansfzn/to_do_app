<script setup>
import { defineProps, ref, computed } from "vue";
import ToDo from "./ToDo.vue";
import ToDoTags from "./ToDoTags.vue";

const props = defineProps({
  tasks: Array,
  title: String,
});

const selectedTag = ref("All");

const selectedTasks = computed(() => {
  if (selectedTag.value === "All") {
    return props.tasks;
  }
  const s_tasks = props.tasks.filter((tsk) => tsk.tag === selectedTag.value);
  if (!s_tasks.length) {
    return props.tasks;
  }
  return props.tasks.filter((task) => task.tag === selectedTag.value);
});
console.log(props.tasks);

console.log(selectedTasks.value, "selected");
</script>

<template>
  <section class="bg-slate-100 shadow-lg shadow-gray-500/50 p-3 rounded-lg">
    <h2 class="my-2 pb-3 font-bold text-gray-800 text-center">{{ title }}</h2>
    <p v-show="!tasks.length" class="text-gray-700 text-semibold text-center">
      No {{ title.toLocaleLowerCase() }} to show
    </p>

    <!-- tag component  -->
    <div v-if="tasks.length">
      <ToDoTags
        :initialTags="tasks.map((task) => task.tag)"
        v-model:selectedTag="selectedTag"
      />
    </div>
    <div>
      <ul class="divide-y divide-blue-200 hover:divide-blue-300 space-y-2">
        <ToDo
          v-for="task in selectedTasks"
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
