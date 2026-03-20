export default defineEventHandler(async (event) => {
  const name = getRouterParam(event,"name");
    const q = getQuery(event);
  return {
   name: name,
    p1: q.p1,
    p2: q.p2
  }; 

  /* const prm = getRouterParams(event); */
 /*  return {
    name:prm.name
  } */
})
