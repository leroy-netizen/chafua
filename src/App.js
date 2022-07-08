function App() {
  // declare functions to handle events
  const handleClick = () => {
    console.log("I have been Clicked");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  let user = "Ombiji";

  // JSX (Javascript XML) syntax similar to html
  return (
    <>
      <input type="text" placeholder="Enter Name" onChange={handleChange} />
      <h1>Niajeni majamaa</h1>
      <h1>Moringa School Devs</h1>
      <button onClick={handleClick}> Click Me</button>
    </>
  );
}

export default App;

// Vanilla Javascript Imparative
// const btn = document.getElementById('buttonn');
// btn.addEventListener('click', ()=> handleClick)
