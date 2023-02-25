import { useState } from "react";
import Button from "./components/button";
import "./App.css";

const btnArr = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "C", 0, "=", "/"];
const operands = ["+", "-", "*", "/"];
const equal = "=";

function App() {
  const [output, setOutput] = useState("");

  function handleBtnClick(number) {
    setOutput((prevNumber) => {
      const lastIndex = prevNumber.length - 1;
      const lastNumber = prevNumber[lastIndex];

      if (operands.includes(number) && operands.includes(lastNumber)) {
        const prevNum = prevNumber.split("");
        prevNum[lastIndex] = number;

        return prevNum.join("");
      }

      return prevNumber + number;
    });
  }

  function handleSubmit() {
    alert(output);
  }

  return (
    <div className="App">
      <div className="calc">
        <div className="output">{output}</div>
        <div className="buttons">
          {btnArr.map((operator) => {
            return (
              <Button
                key={operator}
                number={operator}
                onClick={operator === equal ? handleSubmit : handleBtnClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
