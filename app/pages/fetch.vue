<template>
  <div>
    <h1>Fetch Page</h1>
    <pre>
      {{ data }}
    </pre>
    <ContentRenderer v-if="page" :value="page"/>    
    
<!--     <article>
    <div>
    Title: {{ data.name }}
    </div>
    </article> -->
    <!-- <MyButton @click="paramId++">Id Arttır</MyButton> -->
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data } = await useFetch(`/api/test`,{
  method:"post",
  body:{name:"apo"}
});

const { data: page } = await useAsyncData('readme', () => {
  return queryCollection('content').path('/readme').first()
})

/* const { data } = await useFetch(`/api/hellos?p1=${route.query.p1}&p2=${route.query.p2}`); */

/*  const paramId = ref(0);
 const { data } = await useAsyncData("data", async()=>{
 const result = await $fetch('/api/test', {
    method: 'POST',
    body: { name: `${paramId.value} Ad`  }
  });
  return result;
 }, {
  watch: [paramId]
})
 */

 /* const {data}  = await useFetch(()=>'https://jsonplaceholder.typicode.com/todos',{
   lazy:false,
   query:{
    id:paramId,
    completed:false
  },
  
 }); */
 /* const {data}  = await useFetch(()=>'https://jsonplaceholder.typicode.com/todos/'+paramId.value); */
  
 /* const {data}  = await useFetch('/api/hello',{
  transform:(rec:any)=>{
    return {
      ...rec,
      name : rec.name.toUpperCase()  
    }
  },
  // transform:(rec:any)=>{
  //  rec.name = rec.name.toUpperCase();
  //  return rec;
  //} 
  }
  
 ); */
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

