<template>
  <div>
      <h1>About</h1>
  </div>
</template>

<script setup lang="ts">
/* definePageMeta({
  //layout:'master',
  middleware:'log'
}) */

definePageMeta({
  //layout:'master',
  middleware:[
    function (to,from){
      //console.log("About page middleware");
      setPageLayout('master');
    }
  ]
})
</script>

<style>

</style>