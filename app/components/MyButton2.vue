<template>
  <div class="items-center mt-4">
    <button @click="count++" class="px-2 py-1.5 border border-cyan-600 rounded-lg hover:bg-cyan-500 hover:text-white shadow-md">
      <slot />
    </button>
    <span class="font-semibold text-lg ml-3">{{ count }}</span>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0)
</script>

<style scoped></style>