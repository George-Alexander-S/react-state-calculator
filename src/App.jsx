import "./App.css"
import { useState } from "react"

function App() {

  const [display1, setDisplay1] = useState("0")
  const [display2, setDisplay2] = useState("0")
  const [operation, setOperation] = useState("+")


  const updateDisplay1 = (number) => {
    if (display1 === "0") {
      setDisplay1(number)
    }
    else {
      setDisplay1((display1) => display1.toString() + number.toString())
    }
    console.log(display1)
    console.log(parseInt(display1))
  }

  const clearDisplay1 = () => {
    setDisplay1("0")
  }

  const updateDisplay2 = (number) => {
    if (display2 === "0") {
      setDisplay2(number)
    }
    else {
      setDisplay2((display2) => display2.toString() + number.toString())
    }
    console.log(display2)
    console.log(parseInt(display2))
  }

  const clearDisplay2 = () => {
    setDisplay2("0")
  }

  const updateOperation = (operator) => {
    setOperation(operator);
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{display1}</p>
        <div className="numbers">
          <button onClick={() => updateDisplay1(1)}>1</button>
          <button onClick={() => updateDisplay1(2)}>2</button>
          <button onClick={() => updateDisplay1(3)}>3</button>
          <button onClick={() => updateDisplay1(4)}>4</button>
          <button onClick={() => updateDisplay1(5)}>5</button>
          <button onClick={() => updateDisplay1(6)}>6</button>
          <button onClick={() => updateDisplay1(7)}>7</button>
          <button onClick={() => updateDisplay1(8)}>8</button>
          <button onClick={() => updateDisplay1(9)}>9</button>
          <button onClick={() => updateDisplay1(0)}>0</button>
          <button onClick={() => clearDisplay1()}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => updateOperation("+")}>+</button>
          <button onClick={() => updateOperation("-")}>-</button>
          <button onClick={() => updateOperation("*")}>*</button>
          <button onClick={() => updateOperation("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{display2}</p>
        <div className="numbers">
          <button onClick={() => updateDisplay2(1)}>1</button>
          <button onClick={() => updateDisplay2(2)}>2</button>
          <button onClick={() => updateDisplay2(3)}>3</button>
          <button onClick={() => updateDisplay2(4)}>4</button>
          <button onClick={() => updateDisplay2(5)}>5</button>
          <button onClick={() => updateDisplay2(6)}>6</button>
          <button onClick={() => updateDisplay2(7)}>7</button>
          <button onClick={() => updateDisplay2(8)}>8</button>
          <button onClick={() => updateDisplay2(9)}>9</button>
          <button onClick={() => updateDisplay2(0)}>0</button>
          <button onClick={() => clearDisplay2()}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>0</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
