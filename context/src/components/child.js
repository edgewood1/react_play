import React, { Component } from "react";
import { FamilyConsumer } from "./grandMother";

class Child extends Component {
 state = {
     name: "Mary"
 }
  render() {
    return (
      <div>
          <FamilyConsumer>{context => 
        <button
          onClick={()=>{
            context.change();
          }}
        >
<FamilyConsumer>{context => <p>{context.state}</p>}</FamilyConsumer>
        </button>}</FamilyConsumer>
      </div>
    );
  }
}

export default Child;
