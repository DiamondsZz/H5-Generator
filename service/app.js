const Koa = require("koa");

const Views = require("koa-views");
const Router = require("koa-router");

const App = new Koa();
const Route=new Router()

App.use(Views(__dirname, { extension: "ejs" }));
App.use(Route.routes())
App.use(Route.allowedMethods())


App.listen(3000);

Route.get("/", async (context) => {
  await context.render("index", {
    title: "hello world",
  });
});
