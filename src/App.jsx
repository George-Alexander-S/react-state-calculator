import "./App.css"
import { useState } from "react"

function App() {

  const [display1, setDisplay1] = useState("0")

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

  return (
    <div className="calculator">
      <div className="panel">
        <p>{display1}</p>
        <div className="numbers">
          <button onClick={() => updateDisplay1(1)}>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>+</p>
        <div className="numbers">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>0</p>
        <div className="numbers">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>0</button>
          <button>Clear</button>
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
