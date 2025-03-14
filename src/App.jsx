import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  // Función para actualizar el input con el valor de cada botón
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Función para manejar la evaluación de la expresión
  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Función para manejar el borrado de la pantalla
  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} disabled />
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>11</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={handleEvaluate}>=</button>
      </div>
    </div>
  );
}

export default App;
