<script setup>
import { ref, defineEmits, defineProps, computed, watch } from "vue";

const props = defineProps({
  initialTags: Array,
});
const emit = defineEmits(["addTask", "inputtedTag"]);

const newTask = ref("");
const inputtedTag = ref("");

const addTask = () => {
  emit("addTask", newTask.value, inputtedTag.value);
  newTask.value = "";
  inputtedTag.value = "";
};

const taskAdditionCondition = computed(() => {
  return inputtedTag.value.length > 0 && newTask.value.length;
});

watch(taskAdditionCondition, () => {
  console.log(taskAdditionCondition.value);
});

const tags = [...new Set(props.initialTags)];
</script>

<template>
  <form @submit.prevent="addTask" class="flex items-center justify-center">
    <input
      type="text"
      v-model="newTask"
      class="p-2 bg-white text-gray-700 focus:outline-none shadow-lg shadow-gray-500/50"
      placeholder="Enter New Task"
    />
    <select
      name="select_tag"
      id="select_tag"
      v-model="inputtedTag"
      :class="[
        {
          'p-2.5 bg-white text-gray-700 focus:outline-none shadow-lg shadow-gray-500/50 border-l-4 border-indigo-500': true,
        },
      ]"
    >
      <option :value="inputtedTag" disabled selected>Select Tag</option>
      <option v-for="tag in tags" :value="tag" :key="tag">
        {{ tag }}
      </option>
    </select>
    <button
      type="submit"
      class="p-2 bg-white border-l-4 border-indigo-500 shadow-lg shadow-gray-500/50"
      :disabled="!(inputtedTag.length > 0 && newTask.length)"
    >
      Add
    </button>
  </form>
</template>

<style></style>
