import React from "react";
import { Image,Rate  } from "antd";
class Component extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Rate/>
        <Image
          width={200}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
      </div>
    );
  }
}

export default Component;
