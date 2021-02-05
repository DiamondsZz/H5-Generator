import React from "react";
import { Collapse, Button, message } from "antd";
import {observer,inject} from 'mobx-react';
import style from "./style";
import "./style.css";

const { Panel } = Collapse;

@inject('componentStore')
@observer
class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //当前选中组件
      currentComponent: undefined,
      //基础组件
      basicComponents: ["按钮", "输入框", "开关", "评分", "文本", "图片"],
      //高级组件
      seniorComponents: ["表格", "柱形图", "折线图", "饼状图"],
    };
  }
  selectComponent(currentComponent) {
    this.setState({
      currentComponent,
    });
    message.success(`${currentComponent}组件已经选中，点击内容编辑区域试一试吧！`);
  }
  render() {
    return (
      <Collapse className="component" style={style} defaultActiveKey="1">
        <Panel header="基础组件" key="1">
          {this.state.basicComponents.map((component, componentIndex) => (
            <Button
              type="primary"
              key={componentIndex}
              onClick={() => this.selectComponent(component)}
            >
              {component}
            </Button>
          ))}
        </Panel>

        <Panel header="高级组件" key="3">
          {this.state.seniorComponents.map((component, componentIndex) => (
            <Button type="primary" key={componentIndex}>
              {component}
            </Button>
          ))}
        </Panel>
      </Collapse>
    );
  }
}

export default Component;
