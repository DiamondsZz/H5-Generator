import React from "react";
import { Collapse, Button } from "antd";
import style from "./style";
import "./style.css";

const { Panel } = Collapse;

class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Collapse className="component" style={style} defaultActiveKey="1">
        <Panel header="基础组件" key="1">
          <Button type="primary">按钮</Button>
          <Button type="primary">输入框</Button>
          <Button type="primary">开关</Button>
          <Button type="primary">评分</Button>
        </Panel>

        <Panel header="高级组件" key="3">
          敬请期待！
        </Panel>
      </Collapse>
    );
  }
}

export default Component;
