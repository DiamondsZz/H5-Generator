const Koa = require("koa");

const Views = require("koa-views");
const Router = require("koa-router");

const App = new Koa();
const Route = new Router();

App.use(Views(__dirname, { extension: "ejs" }));
App.use(Route.routes());
App.use(Route.allowedMethods());

App.listen(3000);

Route.get("/", async (context) => {
  await context.render("index", {
    data: [
      //文本
      {
        type: "text",
        value: "hello world",
        style: {
          fontSize: "16px",
        },
      },
      //图片
      {
        type: "img",
        value:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        style: { width: 40 },
      },
    ],
  });
});
