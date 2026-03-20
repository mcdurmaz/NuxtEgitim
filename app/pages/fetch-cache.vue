<template>
  <div>
    <h1>Cache Page</h1>
     <pre>
    {{ data }}
    </pre>
    <MyButton @click="refresh">{{ $t('refresh') }}</MyButton>
<!--     <article>
    <div>
    Title: {{ data.name }}
    </div>
    </article> -->
  </div>
</template>

<script setup lang="ts">
 const {data,refresh}  = await useFetch<any>('/api/hello',{
  key:"cachedHello"
 });

 /* const data  = await useLazyFetch<any>('/api/hello'); */
 /* const data  = await useFetch<any>('/api/hello',{lazy:true}); */
 /* const {data}  = await useFetch<any>('/api/hello'); */
/* const {data}  = await useFetch<any>('https://jsonplaceholder.typicode.com/comments'); */
//const {data}  = await useFetch<any>('https://jsonplaceholder.typicode.com/todos/2');
/* const data  = await $fetch<any>('https://jsonplaceholder.typicode.com/todos/2'); */
/* const { data } = await useAsyncData('article',
    () => $fetch<any>('https://jsonplaceholder.typicode.com/todos/2')
); */
</script>

