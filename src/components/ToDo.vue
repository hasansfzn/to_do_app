<script setup>
import { defineProps, ref, nextTick, computed } from "vue";
import editImg from "../assets/images/edit.svg";
const props = defineProps({
  task: Object,
});

const editing = ref(false);
const editInput = ref(null);

const deleteTask = () => {
  const res = confirm("Are you sure to delete the task?");
  if (res) props.task.deleted = true;
};

const handleEdit = () => {
  editing.value = true;
  nextTick(() => {
    editInput.value.focus();
  });
};

const textLength = computed(() => {
  return props.task.label.length * 9;
});
</script>

<template>
  <li class="flex justify-between items-center">
    <div>
      <!-- checkbox  -->
      <input
        :id="'taskName' + task.id"
        v-show="!task.deleted"
        type="checkbox"
        v-model="task.completed"
        class="checked:bg-blue-500"
      />
      <label :for="'taskName' + task.id">
        <span class="p-1">
          <!-- task name  -->
          <input
            :style="{ width: textLength + 'px' }"
            ref="editInput"
            type="text"
            :placeholder="task.label"
            :class="[
              { 'text-rose-500': task.deleted },
              { 'line-through text-gray-300 ': task.completed },
              { 'bg-transparent focus:outline-gray-300 ms-2': true },
            ]"
            :disabled="!editing"
            v-model="task.label"
            @keydown.enter="editing = false"
            @focusout="editing = false"
          />
        </span>
      </label>
    </div>
    <!-- action button  -->
    <div>
      <button
        v-show="!task.deleted"
        :class="[
          {
            'ms-2 mt-1 bg-rose-300 hover:bg-rose-400 text-gray-700 font-semibold py-1 px-2 border border-gray-400 rounded-lg shadow text-s': true,
          },
        ]"
        @click="deleteTask"
      >
        X
      </button>

      <button
        v-show="!task.deleted"
        class="ms-1 bg-blue-300 hover:bg-blue-400 px-2 py-2 mt-1 border border-gray-400 rounded-lg shadow"
        @click="handleEdit"
      >
        <img :src="editImg" class="h-3 w-3.5" alt="other_add" />
      </button>
    </div>
  </li>
</template>

<style></style>
