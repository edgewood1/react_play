import React, { Component } from "react";
import Mother from "./mother";

const FamilyContext = React.createContext({});

export const FamilyProvider = FamilyContext.Provider;
export const FamilyConsumer = FamilyContext.Consumer;

class GrandMother extends Component {
  state = {
    name: 0
  };

  change=()=>{
    this.setState({ name: this.state.name +1 });
  }
  render() {
    return (
      <div>
        <h1> grandmother</h1>
        <FamilyProvider value={{state: this.state.name, change: this.change} }>
          <Mother />
        </FamilyProvider>
      </div>
    );
  }
}

export default GrandMother;
