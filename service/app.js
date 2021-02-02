const Path = require("path");

const Koa = require("koa");

const Views = require("koa-views");
const Router = require("koa-router");

const App = new Koa();
const Route = new Router();

App.use(Views(Path.join(__dirname, "ejs"), { extension: "ejs" }));
App.use(Route.routes());
App.use(Route.allowedMethods());

App.listen(3000);

const styles = [
  {
    id: "text",
    tag: "span",
    style: {
      "font-size": "16px",
    },
  },
  {
    id: "img",
    tag: "img",
    style: { width: "40px" },
  },
];

const data = [
  //文本
  {
    id: "text",
    type: "text",
    value: "hello world",
  },
  //图片
  {
    id: "img",
    type: "img",
    value:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
];

Route.get("/", async (context) => {
  await context.render("index", {
    data,
  });
});
