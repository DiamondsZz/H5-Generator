import React from "react";

import "./style.css";
class Operation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="operation">
        <div className="operation-area"></div>
      </div>
    );
  }
}

export default Operation;
