<script setup>
defineProps({
  tasks: Array,
  title: String,
});
</script>

<template>
  <section class="bg-cyan-500 shadow-lg shadow-cyan-500/50 p-3 rounded-lg">
    <h2 class="my-2 font-bold text-gray-800 text-center">{{ title }}</h2>
    <div>
      <ul class="divide-y divide-blue-200 hover:divide-blue-300 space-y-2">
        <li v-for="task in tasks" :key="task.id">
          <label :class="[{ 'line-through text-gray-300 ': task.completed }]">
            <input
              type="checkbox"
              v-model="task.completed"
              class="checked:bg-blue-500"
            />
            <span class="ms-2"> {{ task.label }}</span>
          </label>
        </li>
      </ul>
    </div>
  </section>
</template>

<style></style>
