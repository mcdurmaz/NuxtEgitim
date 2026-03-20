export default defineEventHandler(async (event) => {
  return {
        id: 1,
        name: "Nuxt",
        age: 18
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
