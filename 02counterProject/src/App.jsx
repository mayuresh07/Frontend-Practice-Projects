import './App.css'
import { useState } from 'react';

function App() {
  let [counter, setCounter] = useState(0)
  
  const addValue = () => {
    console.log("Value added", counter);   
    if(counter < 20)
      setCounter(counter+1)
    else
      console.log("Thike bhai, itna hi")
      //setCounter(counter = 20)
  }

  const reduceValue = () => {
    if(counter !=0)
      setCounter(counter - 1)
    else
      setCounter(counter = 0)
      console.log("Bas bhai, bas!!")

    
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={reduceValue}>Remove Value</button>
    </>
  )
}

export default App
