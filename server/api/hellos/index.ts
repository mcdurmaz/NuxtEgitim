export default defineEventHandler(async (event) => {
  const q = getQuery(event);
  return {
    p1: q.p1,
    p2: q.p2
  }
  /*  await new Promise((resolve)=>setTimeout(resolve,3000));
   return {
         id: 1,
         name: "Nuxt",
         age: 18
   } */
  /* return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Nuxt",
        age: 18
      })
    }, 3000);

  }) */
})
