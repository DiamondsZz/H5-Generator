import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "react-contexify/dist/ReactContexify.css";
import App from "./components/App/";
import { Provider } from "mobx-react";
import componentStore from "./stores/componentStore";
ReactDOM.render(
  <Provider componentStore={componentStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
