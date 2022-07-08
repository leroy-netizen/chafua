import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Leroy");
  // const count = useState(0);
  // console.log(count);
  // state = {
  //   name: "Baba wa keja",
  //   age: 49,
  //   school: "Moringa",
  //   count: 0,
  // };

  const Add = () => {
    // this.setState({
    //   count: this.state.count + 1,
    //   school: (this.state.school = "Technical University Of Kenya"),
    // });
    setCount(count + 1);
  };
  const Sub = () => {
    setCount(count - 1);
  };
  const handleChangeName = () => {
    setName("Ombiji");
  };

  return (
    <>
      <h1>REACT STATE</h1>

      <h4>Counter value:{count}</h4>
      <h4>Name:{name}</h4>
      <button onClick={Add}>Add One</button>
      <button onClick={Sub}>Sub One</button>
      <button onClick={handleChangeName}>change Name</button>
    </>
  );
};
export default App;
