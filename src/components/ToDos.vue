<script setup>
import { ref } from "vue";
const toDos = ref([
  { id: 1, label: "Read Vue Docs", completed: false },
  { id: 2, label: "Learn Reactivity", completed: false },
  { id: 3, label: "Learn Ref and Js Proxy", completed: false },
  { id: 4, label: "Practice Dummy Project", completed: false },
]);
</script>

<template>
  <section>
    <h2 class="font-bold text-3xl text-white drop-shadow-lg shadow-black">
      To Do Application <span></span>
    </h2>
  </section>
</template>

<style></style>
