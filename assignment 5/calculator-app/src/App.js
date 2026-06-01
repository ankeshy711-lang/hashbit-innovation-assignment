import "./App.css";

function App() {

  const add = () => {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("result").innerText = n1 + n2;
  };

  const subtract = () => {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("result").innerText = n1 - n2;
  };

  const multiply = () => {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("result").innerText = n1 * n2;
  };

  const divide = () => {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    if (n2 === 0) {
      document.getElementById("result").innerText =
        "Cannot divide by zero";
    } else {
      document.getElementById("result").innerText = n1 / n2;
    }
  };

  return (
    <div className="App">

      <h1>Calculator</h1>

      <input
        id="num1"
        type="number"
        placeholder="Enter First Number"
      />

      <br /><br />

      <input
        id="num2"
        type="number"
        placeholder="Enter Second Number"
      />

      <br /><br />

      <button onClick={add}>+</button>

      <button onClick={subtract}>-</button>

      <button onClick={multiply}>*</button>

      <button onClick={divide}>/</button>

      <br /><br />

      <div id="result">
        Output
      </div>

    </div>
  );
}

export default App;