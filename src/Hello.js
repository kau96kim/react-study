import React, { Component } from "react";

class HelloWorld extends Component {
  static defaultProps = {
    name: "이름없음",
    color: "aqua",
    isSpecial: false,
  };

  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial ? <b>* </b> : null}
        Hello, world! name: {name}
        {isSpecial && <b> *</b>}
      </div>
    );
  }
}

export default HelloWorld;
