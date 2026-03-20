<template>
  <div>
    <h1>Cache Data Page</h1>
    <pre>
    {{ data }}
    </pre>
    <div class="flex gap-2">
    <MyButton @click="updateCache">
        Update Cache
      </MyButton>
      <MyButton @click="clearCache">
        Clear Cache
      </MyButton>
      <MyButton @click="refreshCache">
        Refresh Cache
      </MyButton>
    </div>


    <!--     <article>
    <div>
    Title: {{ data.name }}
    </div>
    </article> -->
  </div>
</template>

<script setup lang="ts">
const {data} = useNuxtData("cachedHello");

function clearCache() {
  clearNuxtData("cachedHello");
}

function updateCache() {
  data.value = { ...data.value, name: "Updated" };

  /* data.value = {
    id:oldData.id,
    name:"Updated",
    age:oldData.age
  } */
  
}

function refreshCache() {
  refreshNuxtData('cachedHello');
}


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
