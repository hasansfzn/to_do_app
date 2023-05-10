<script setup>
import { ref, defineEmits, defineProps, computed, watch } from "vue";

const props = defineProps({
  initialTags: Array,
});
const emit = defineEmits(["addTask", "inputtedTag"]);

const newTask = ref("");
const inputtedTag = ref("");

const tags = computed(() => {
  return [...new Set(props.initialTags)];
});

const addTask = () => {
  emit("addTask", newTask.value, inputtedTag.value);
  newTask.value = "";
  inputtedTag.value = "";
};

const taskAdditionCondition = computed(() => {
  return inputtedTag.value.length > 0 && newTask.value.length;
});

const addTaskTextWidth = computed(() => {
  return newTask.value.length * 10 ?? 40;
});
</script>

<template>
  <form @submit.prevent="addTask" class="flex items-center justify-center">
    <input
      type="text"
      v-model="newTask"
      class="p-2 bg-white text-gray-700 focus:outline-none shadow-lg shadow-gray-500/50"
      placeholder="Enter New Task"
    />
    <input
      :class="[
        {
          'p-2 bg-white text-gray-700 focus:outline-none shadow-lg shadow-gray-500/50 border-l-4 border-indigo-500 w-1/5': true,
        },
      ]"
      type="text"
      placeholder="Enter/Select Tag"
      v-model="inputtedTag"
      :list="tags"
    />
    <datalist :id="tags">
      <option v-for="tag in tags" :value="tag" :key="tag">
        {{ tag }}
      </option>
    </datalist>
    <!-- <select
      name="select_tag"
      id="select_tag"
      v-model="inputtedTag"
      :class="[
        {
          'p-2.5 bg-white text-gray-700 focus:outline-none shadow-lg shadow-gray-500/50 border-l-4 border-indigo-500': true,
        },
      ]"
    >
      <option value="" disabled selected>Select Tag</option>
      <option v-for="tag in tags" :value="tag" :key="tag">
        {{ tag }}
      </option>
    </select> -->
    <button
      type="submit"
      :class="[
        {
          'p-2 bg-white border-l-4 border-indigo-500 shadow-lg shadow-gray-500/50': true,
          'cursor-not-allowed opacity-75': !taskAdditionCondition,
        },
      ]"
      :disabled="!taskAdditionCondition"
    >
      Add
    </button>
  </form>
</template>

<style></style>
