<script setup>
import { ref, computed } from "vue";
import ToDoList from "./ToDoList.vue";

const toDos = ref([
  { id: 1, label: "Read Vue Docs", completed: false },
  { id: 2, label: "Learn Reactivity", completed: false },
  { id: 3, label: "Learn Ref and Js Proxy", completed: false },
  { id: 4, label: "Practice Dummy Project", completed: false },
]);

const completed = computed(() => {
  return toDos.value.filter((todo) => todo.completed);
});

const inCompleted = computed(() => {
  return toDos.value.filter((todo) => !todo.completed);
});
</script>

<template>
  <section>
    <h2 class="font-bold text-3xl text-white drop-shadow-lg shadow-black">
      To Do Application
    </h2>
    <div class="grid grid-cols-2 gap-4 mt-4 pt-2">
      <ToDoList :assignments="inCompleted" />
      <ToDoList :assignments="completed" />
    </div>
  </section>
</template>

<style></style>
