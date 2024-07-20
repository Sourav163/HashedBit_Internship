import { useState } from "react";
import "./App.css";

// Develop a Calculator component
//     There should be two input fields and four buttons for addition, subtration, multiplication and division. Also display the output in an another div.

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [output, setOutput] = useState("");

  const calculate = (event) => {
    switch (event.target.innerText) {
      case "Add":
        setOutput(value1 + value2);
        break;
      case "Subtract":
        setOutput(value1 - value2);
        break;
      case "Multiply":
        setOutput(value1 * value2);
        break;
      case "Divide":
        setOutput(value1 / value2);
    }
  };

  return (
    <>
      <div className="calculator">
        <h1 className="heading">Calculator</h1>
        <input
          type="number"
          value={value1}
          onChange={(e) => setValue1(Number(e.target.value))}
        />
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(Number(e.target.value))}
        />
        <div className="functions">
          <button onClick={calculate}>Add</button>
          <button onClick={calculate}>Subtract</button>
          <button onClick={calculate}>Multiply</button>
          <button onClick={calculate}>Divide</button>
        </div>
        <div className="output">{output}</div>
      </div>
    </>
  );
}

export default App;
