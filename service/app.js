const Koa = require("koa");
const App = new Koa();
App.use(async (context) => {
  context.body = "hello world";
});

App.listen(3000);
