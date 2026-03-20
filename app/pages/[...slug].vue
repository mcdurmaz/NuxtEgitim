<template>
<div>
    <nav>
        <ul>
          <li v-for="link in navigation" :key="link.path">
            <NuxtLink :to="link.path">
              <span>{{ link.title }}</span> 
            </NuxtLink>
          </li>
        </ul>
    </nav>
    <ContentRenderer v-if="page" :value="page"/>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
const { data: navigation } = await useAsyncData('navigation', () => {
  return queryCollection('content').select('title', 'path').all();
})
</script>

<style>

</style>