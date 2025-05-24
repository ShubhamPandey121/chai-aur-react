import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15
  let [counter, setCounter] = useState(15)


  const addValue = () => {
    // console.log("value added", Math.random());
    if (counter < 20) {
      counter++;
      setCounter(counter)
    }

  }
  const removeValue = () => {
    // console.log("value added", Math.random());
   if (counter > 0) {
      counter--;
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
