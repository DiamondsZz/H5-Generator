import React from "react";

import Component from "../Component";
import Operation from "../Operation";

import style from "./style";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style}>
        <Component />
        <Operation />
      </div>
    );
  }
}

export default App;
