export default defineEventHandler(async (event) => {
  const {name} = await readBody(event);
  return {
   ...event.context.auth, 
   name: name
  };
})
