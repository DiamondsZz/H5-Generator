import React from "react";


import "./style.css"
class Operation extends React.Component {
  constructor(props) {
    super(props);
  }
  mouseUp(e){
    console.log(e);
  }
  render() {
    return <div class="operation" onMouseUp={this.mouseUp}></div>;
  }
}

export default Operation;
