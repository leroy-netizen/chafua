import React, { Component } from "react";
class App extends Component {
  state = {
    name: "Baba wa keja",
    age: 49,
    school: "Moringa",
    count: 0,
  };

  Add = () => {
    this.setState({
      count: this.state.count + 1,
      school: (this.state.school = "Technical University Of Kenya"),
    });
  };
  Sub = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <>
        <h1>REACT STATE</h1>
        <h2>Name:{this.state.name}</h2>
        <h2>Age:{this.state.age}</h2>
        <h2>School:{this.state.school}</h2>
        <h4>Counter value:{this.state.count}</h4>
        <button onClick={this.Add}>Add One</button>
        <button onClick={this.Sub}>Sub One</button>
      </>
    );
  }
}
export default App;
