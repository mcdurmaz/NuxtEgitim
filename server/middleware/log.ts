export default defineEventHandler(async (event) => {
  //await console.log(event.path,event.method);
  event.context.auth = {
    username:"cabbar",
    isAuth: true
  }
})
