import React from "react";
import { Rnd } from "react-rnd";
import { Drawer, Divider, Tag, Image } from "antd";
import { CompactPicker } from "react-color";
import "./style.css";

class Operation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //属性弹窗显示
      visible: false,
      //区域样式
      style: {},
    };
  }
  //显示属性弹窗
  showDrawer(e) {
    e.preventDefault();
    this.setState({ visible: true });
  } //隐藏属性弹窗
  hideDrawer(e) {
    this.setState({ visible: false });
  }
  //颜色改变
  colorChange(color) {
    this.setState({
      style: {
        backgroundColor: color.hex,
      },
    });
  }
  addComponent(){
    
  }
  render() {
    return (
      <div className="operation">
        <div
          id="operation_area"
          className="operation-area"
          style={this.state.style}
          onContextMenu={(e) => this.showDrawer(e)}
          onClick={() => this.addComponent()}
        >
          <Rnd
            bounds="#operation_area"
            default={{
              x: 0,
              y: 0,
              width: 120,
            }}
          >
            <Image
              preview={false}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Rnd>
        </div>
        <Drawer
          title="组件属性"
          width={360}
          placement="right"
          visible={this.state.visible}
          mask={false}
          onClose={(e) => this.hideDrawer(e)}
        >
          <Tag
            color="magenta"
            style={{
              display: "block",
              width: "60px",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            背景色
          </Tag>
          <CompactPicker onChange={(color) => this.colorChange(color)} />
          <Divider />
        </Drawer>
      </div>
    );
  }
}

export default Operation;
