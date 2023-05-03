<script setup>
import { ref, computed, watchEffect, watch } from "vue";
import utils from "../utils/utils.js";
import ToDoList from "../components/ToDoList.vue";
import TaskAddForm from "../components/TaskAddForm.vue";

const { saveDataToLocal } = utils;

const toDos = ref([
  { id: 1, label: "Read Vue Docs", completed: false, deleted: false },
  { id: 2, label: "Learn Reactivity", completed: false, deleted: false },
  { id: 3, label: "Learn Ref and Js Proxy", completed: false, deleted: false },
  { id: 4, label: "Practice Dummy Project", completed: false, deleted: false },
]);

// watchEffect(() => {
//   console.log(toDos.value);
//   if (localStorage.getItem("tasks")) {
//     toDos.value = [...toDos.value, JSON.parse(localStorage.getItem("tasks"))];
//   } else {
//     saveDataToLocal(toDos.value);
//   }
// });

/*


    setFormValues(values);
    //to local storage
    saveDataToLocal({ ...formData, ...values });


      const setFormValues = (values) => {
    setFormData((previousValues) => ({
      ...previousValues,
      ...values,
    }));
  };

      useEffect(() => {
    if (localStorage.getItem('formData')) {
      // console.log(localStorage.getItem('formData'));

      const dataFromLocalStorage = JSON.parse(
        decrypt(localStorage.getItem('formData'))
      );

      if (dataFromLocalStorage) {
        // console.log(dataFromLocalStorage, 'decrypted');
        setFormValues(dataFromLocalStorage);
      }
    }


*/

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
  <div
    id="popup-modal"
    tabindex="-1"
    class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700"></div>
    </div>
  </div>
</template>

<style></style>
