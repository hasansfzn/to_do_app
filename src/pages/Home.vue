<script setup>
import { ref, computed, watchEffect, watch } from "vue";
import utils from "../utils/utils.js";
import ToDoList from "../components/ToDoList.vue";
import TaskAddForm from "../components/TaskAddForm.vue";

const { saveDataToLocal, set } = utils;

const toDos = ref([
  {
    id: 1,
    label: "Read Vue Docs",
    completed: false,
    deleted: false,
    tag: "Vue",
  },
  {
    id: 2,
    label: "Learn Reactivity",
    completed: false,
    deleted: false,
    tag: "Vue",
  },
  {
    id: 3,
    label: "Learn Ref and Js Proxy",
    completed: false,
    deleted: false,
    tag: "Vue",
  },
  {
    id: 4,
    label: "Practice Dummy Project",
    completed: false,
    deleted: false,
    tag: "Git",
  },
  {
    id: 5,
    label: "JavaScript Practice",
    completed: false,
    deleted: false,
    tag: "JS",
  },
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

const addTask = (name, tag) => {
  toDos.value.push({
    id: toDos.value.length + 1,
    label: name,
    completed: false,
    deleted: false,
    tag: tag,
  });
  saveDataToLocal(toDos.value);
};

const hideList = ref(false);
const toggleHideDeletedList = () => {
  hideList.value = !hideList.value;
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
      <TaskAddForm
        @addTask="addTask"
        :initialTags="toDos.map((todo) => todo.tag)"
      />
    </div>
    <div class="mt-4 pt-2">
      <Transition name="fade-button">
        <button
          v-if="hideList"
          @click="toggleHideDeletedList"
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span
            class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-transparent rounded-md group-hover:bg-opacity-0"
          >
            Show {{ deletedTasks.length }} Deleted Tasks
          </span>
        </button>
      </Transition>

      <Transition name="fade">
        <ToDoList
          v-if="!hideList"
          :tasks="deletedTasks"
          title="Deleted Tasks"
          collapsible
          @hideDeletedColumn="toggleHideDeletedList"
        />
      </Transition>
    </div>
  </section>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-button-enter-active,
.fade-button-leave-active {
  transition: opacity 0.6 ease;
}
.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}
</style>
