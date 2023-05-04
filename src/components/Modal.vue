<template>
  <!-- modal button -->
  <!-- modal  -->
  <button
    class="bg-purple-500 text-white rounded-md px-8 py-2 text-base font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-300"
    id="open-btn"
    @click="toggleModalShow"
  >
    Open Modal
  </button>
  <!-- modal finish  -->

  <!-- modal body  -->
  <div
    class="fixed insert-0 bg-gray-600 bg-opacity-50 overflow-x-auto overflow-y-auto h-full w-full"
    :class="{ hidden: !showModal }"
    id="modal"
  >
    <div
      class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
    >
      <div class="text-center">
        <input type="text" :placeholder="task.label" v-model="task.label" />
        <div class="items-center px-4 py-3">
          <button
            id="ok-btn"
            @click="toggleModalShow"
            class="px-4 py-2 bg-purple-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            Edit
          </button>
          <button
            id="ok-btn"
            @click="toggleModalShow"
            class="px-4 py-2 bg-purple-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const showModal = ref(false);

const toggleModalShow = () => {
  showModal.value = !showModal.value;
};
</script>

<style></style>
