import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import ReactDOM from "react-dom"
import Button from "./Button"
import "./index.css"
import Reset from "./Reset"
import Decrease from "./Decrease"
import Save from "./Save"

function App() {
  const [count, setCount] = useState(0)
  const [calculations, setCalculations] = useState([])

  const incrementCount = increment => {
    setCount(count + increment)
  }

  const resetToZero = () => {
    setCount(0)
  }

  const decreaseCount = increment => {
    setCount(count - increment)
  }

  const saveArray = value => {
    //Need to figure out how to append current value of count to array
    console.log([...calculations, value])
    setCalculations([...calculations, value])
    
  }

  return (
    <div className="App">
      <Button increment={1} onClickFunction={incrementCount} />
      <Decrease increment={1} onClickFunction={decreaseCount} />
      <Button increment={10} onClickFunction={incrementCount} />
      <Decrease increment={10} onClickFunction={decreaseCount} />
      <Button increment={100} onClickFunction={incrementCount} />
      <Decrease increment={100} onClickFunction={decreaseCount} />
      <Button increment={1000} onClickFunction={incrementCount} />
      <Decrease increment={1000} onClickFunction={decreaseCount} />
      <Reset onClickFunction={resetToZero}/>
      <Save value={count} onClickFunction={saveArray}/>
      <span>{count}</span>
      <br/>
      {calculations.map((c, i) =>  <div key = {i} ><span key = {i}>{c}</span><br/></div>)}
    </div>
  );
}

export default App;
