import "./App.css"
import { useState } from "react"

function App() {

  const [display1, setDisplay1] = useState("0")
  const [display2, setDisplay2] = useState("0")
  const [operation, setOperation] = useState("+")
  const [result, setResult] = useState(0)

  const [stored, setStored] = useState("")


  const updateDisplay1 = (number) => {
    if (display1 === "0" && number === 0) {
      setDisplay1(number)
    }
    else if (display1 === 0) {
      setDisplay1("")
      setDisplay1((display1) => display1.toString() + number.toString())
    }
    else if (display1 === "0") {
      setDisplay1("")
      setDisplay1((display1) => display1.toString() + number.toString())
    }
    else {
      setDisplay1((display1) => display1.toString() + number.toString())
    }
  }

  const clearDisplay1 = () => {
    setDisplay1("0")
  }

  const updateDisplay2 = (number) => {
    if (display2 === "0" && number === 0) {
      setDisplay2(number)
    }
    else if (display2 === 0) {
      setDisplay2("")
      setDisplay2((display2) => display2.toString() + number.toString())
    }
    else if (display2 === "0") {
      setDisplay2("")
      setDisplay2((display2) => display2.toString() + number.toString())
    }
    else {
      setDisplay2((display2) => display2.toString() + number.toString())
    }
  }

  const clearDisplay2 = () => {
    setDisplay2("0")
  }

  const updateOperation = (operator) => {
    setOperation(operator);
  }

  const calculate = (number1, number2) => {
    if (operation === "+") {
      setResult(number1+number2)
    }
    else if (operation === "-") {
      setResult(number1 - number2)
    }
    else if (operation === "*") {
      setResult(number1 * number2)
    }
    else if (operation === "÷") {
      setResult(number1 / number2)
    }
    console.log(number1+" "+operation+" "+number2+" = "+result)
  }

  const storeResult = () => {
    setStored(result)
    console.log("stored value of: "+result)
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
          <button onClick={() => updateDisplay1(".")}>.</button>
          <button onClick={() => clearDisplay1()}>Clear</button>
        </div>
        <button onClick={() => setDisplay1(stored)}>Recall</button>
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
        <button onClick={() => setDisplay2(stored)}>Recall</button>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => calculate(parseFloat(display1), parseFloat(display2))}>=</button>
          <button style={{marginTop: 4}} onClick={() => storeResult()}>Store</button>
        </div>
      </div>
    </div>
  )
}

export default App
