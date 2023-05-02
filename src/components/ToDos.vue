<script setup>
import { ref, computed } from "vue";
import ToDoList from "./ToDoList.vue";
import TaskAddForm from "./TaskAddForm.vue";

let toDos = ref([
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

const addTask = (name) => {
  toDos.value.push({
    id: toDos.value.length + 1,
    label: name,
    completed: false,
  });
};

// const deleteTask = (indx) => {
//   toDos.value = toDos.value.splice(indx, 1);
// };
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
      <ToDoList :tasks="deleted" title="Deleted Tasks" />
    </div>
  </section>
</template>

<style></style>
