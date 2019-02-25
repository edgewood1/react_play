import React, { Component } from "react";
import Child from "./child";

class Mother extends Component {
  render() {
    return (
      <div>
        <h1> mother</h1>
        <Child />
      </div>
    );
  }
}

export default Mother;
