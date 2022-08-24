import { useState } from 'react'
import './App.css'

function App() {
  const [screenValue, setScreenValue] = useState<string>("")
  const [screenResult, setScreenResult] = useState<number>(0)
  const [operation, setOperation] = useState<boolean>(false)


  const addDigitScreen = (digit: string) => {
    if(screenValue.length > 15) {
      return
    }
    if((digit === "+" || digit === "-" || digit === "*" || digit === "/") && operation) {
      setOperation(false)
      setScreenValue(prevScreenValue => prevScreenValue + digit.toString())
      return
    }

    if(operation) {
      setOperation(false)
      setScreenValue(digit.toString())
      setScreenResult(Number(digit))
      return
    }
    setScreenValue(prevScreenValue => prevScreenValue + digit.toString())

    setScreenResult(digit)
    return
  }

  const cleanScreen = () => {
    setOperation(false)
    setScreenValue("")
    setScreenResult(0)
  }

  return (
    <div className="background-calc">
     <div className='calc'>
      <h1>{screenValue}</h1> 
      <h1>{screenResult.toString()}</h1> 
      <table>
        <tr>
          <td><button className="calc-button">C</button></td>
          <td><button className="calc-button">M</button></td>
          <td><button className="calc-button" onClick={() => addDigitScreen("/")}>/</button></td>
          <td><button className="calc-button" onClick={() => addDigitScreen("*")}>X</button></td>
        </tr>
        <tr>
          <td><button className="calc-button">7</button></td>
          <td><button className="calc-button">8</button></td>
          <td><button className="calc-button">9</button></td>
          <td><button className="calc-button" onClick={() => addDigitScreen("-")}>-</button></td>
        </tr>
        <tr>
          <td><button className="calc-button">4</button></td>
          <td><button className="calc-button">5</button></td>
          <td><button className="calc-button">6</button></td>
          <td><button className="calc-button" onClick={() => addDigitScreen("+")}>+</button></td>
        </tr>
        <tr>
          <td><button className="calc-button">1</button></td>
          <td><button className="calc-button">2</button></td>
          <td><button className="calc-button">3</button></td>
          <td rowSpan={2}><button className="calc-button equals">=</button></td>
        </tr>
        <tr>
          <td colSpan={2}><button className="calc-button zero">0</button></td>
          <td><button className="calc-button">.</button></td>
        </tr>
      </table>
     </div>
    </div>
  )
}

export default App
