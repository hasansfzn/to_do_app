<script setup>
import { defineProps, ref, nextTick, computed, watch } from "vue";
import Swal from "sweetalert2";
import editImg from "../assets/images/edit.svg";
const props = defineProps({
  task: Object,
});

const editing = ref(false);
const editInput = ref(null);
let taskLabel = props.task.label;

const deleteTask = () => {
  Swal.fire({
    title: "Are you sure to delete the task?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      props.task.deleted = true;
      Swal.fire(
        "Deleted!",
        `Task - ${props.task.label} has been deleted.`,
        "success"
      );
    }
  });
};

const handleEdit = () => {
  editing.value = true;
  nextTick(() => {
    editInput.value.focus();
  });
};

const textLength = computed(() => {
  return props.task.label?.length * 10 ?? 40;
});

const swalConfirm = (taskMsg) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: `Task: ${props.task.label} is edited.`,
    showConfirmButton: false,
    toast: true,
    timer: 1500,
  });
};

const taskCompeteToggle = () => {
  if (!props.task.deleted) {
    if (!props.task.completed) {
      swalConfirm(`Task: ${props.task.label} is completed.`);
    }
    props.task.completed = !props.task.completed;
  }
};

const doneEdit = () => {
  editing.value = false;

  if (taskLabel !== props.task.label) {
    swalConfirm(`Task: ${props.task.label} is edited.`);
    taskLabel = props.task.label;
  }
};
</script>

<template>
  <li class="flex items-center justify-between">
    <label>
      <!-- checkbox  -->
      <input
        :id="'taskName' + task.id"
        v-show="!task.deleted"
        type="checkbox"
        v-model="task.completed"
        class="checked:bg-blue-500"
      />
      <span class="p-1" @click="taskCompeteToggle">
        <!-- task name  -->
        <input
          :style="{ width: textLength + 'px' }"
          ref="editInput"
          type="text"
          :placeholder="task.label"
          :class="[
            { 'text-rose-500': task.deleted },
            { 'line-through text-gray-400 ': task.completed },
            { 'bg-transparent focus:outline-gray-300 ms-2': true },
          ]"
          :disabled="!editing"
          v-model.trim="task.label"
          @keydown.enter="doneEdit"
          @focusout="doneEdit"
        />
      </span>
    </label>

    <!-- action button  -->
    <div>
      <button
        v-show="!task.deleted"
        :class="[
          {
            'ms-2 mt-1 bg-rose-400 hover:bg-rose-500 text-gray-700 font-semibold py-1 px-2 border border-gray-400 rounded-lg shadow text-s': true,
          },
        ]"
        @click="deleteTask"
      >
        X
      </button>

      <button
        v-show="!task.deleted & !task.completed"
        class="ms-1 bg-blue-300 hover:bg-blue-400 px-2 py-2 mt-1 border border-gray-400 rounded-lg shadow"
        @click="handleEdit"
      >
        <img :src="editImg" class="h-3 w-3.5" alt="other_add" />
      </button>
    </div>
  </li>
</template>

<style></style>
