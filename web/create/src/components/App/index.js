import React from "react";

import Component from "../Component";
import Operation from "../Operation";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Component />
        <Operation />
      </div>
    );
  }
}

export default App;
