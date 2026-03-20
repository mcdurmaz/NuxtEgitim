<template>
  <div>
  <h1>Query Params</h1>
    Sayfa: {{ route.query.page }}
  </div>
  <div>
    Search: {{ route.query.search }}
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

</script>

<style></style>