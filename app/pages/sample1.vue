<template>
  <div>
    <h1>Sample Page 1</h1>
    <img src="/assets/img/manzara.jpg" width="640" height="400">
    
    <div class="flex gap-2 items-center">
      <MyButton class="mt-2" @click="count++">
        My Button
      </MyButton>
      <span class="font-semibold text-lg mt-2">{{ count }}</span>
    </div>

  </div>
</template>

<script setup lang="ts">
/* import "/assets/css/main.css" */
const count = ref(0)
/* definePageMeta({
  //layout:'master',
  middleware:'log'
}) */
</script>

<style scoped>
/* @import url("/assets/css/main.css") */
</style>
