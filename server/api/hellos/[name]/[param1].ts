export default defineEventHandler(async (event) => {
  const params = getRouterParams(event);
  return {
   name: params.name,
   p1: params.param1,
  }; 

  /* const prm = getRouterParams(event); */
 /*  return {
    name:prm.name
  } */
})
