<script setup>
import { ref, computed, watchEffect, watch } from "vue";
import utils from "../utils/utils.js";
import ToDoList from "../components/ToDoList.vue";
import TaskAddForm from "../components/TaskAddForm.vue";

const { saveDataToLocal, set } = utils;

const toDos = ref([
  { id: 1, label: "Read Vue Docs", completed: false, deleted: false },
  { id: 2, label: "Learn Reactivity", completed: false, deleted: false },
  { id: 3, label: "Learn Ref and Js Proxy", completed: false, deleted: false },
  { id: 4, label: "Practice Dummy Project", completed: false, deleted: false },
]);

watchEffect(() => {
  if (sessionStorage.getItem("tasks")) {
    toDos.value = [...JSON.parse(sessionStorage.getItem("tasks"))];
  } else {
    saveDataToLocal(toDos.value);
  }
});

watch(
  toDos,
  (newVal) => {
    saveDataToLocal(newVal);
  },
  { deep: true }
);

const completed = computed(() => {
  return toDos.value.filter((todo) => todo.completed && !todo.deleted);
});

const inCompleted = computed(() => {
  return toDos.value.filter((todo) => !todo.completed && !todo.deleted);
});

const deletedTasks = computed(() => {
  return toDos.value.filter((todo) => todo.deleted);
});

const addTask = (name) => {
  toDos.value.push({
    id: toDos.value.length + 1,
    label: name,
    completed: false,
    deleted: false,
  });
  saveDataToLocal(toDos.value);
};
</script>

<template>
  <section>
    <h2
      class="font-bold text-3xl text-white drop-shadow-lg shadow-black text-center"
    >
      To Do Application
    </h2>

    <div class="grid grid-cols-2 gap-4 mt-4 mb-3 pb-2 pt-2">
      <ToDoList :tasks="inCompleted" title="Incomplete Tasks" />
      <ToDoList :tasks="completed" title="Complete Tasks" />
    </div>
    <div>
      <TaskAddForm @addTask="addTask" />
    </div>
    <div class="mt-4 pt-2">
      <ToDoList :tasks="deletedTasks" title="Deleted Tasks" />
    </div>
  </section>
</template>

<style></style>
