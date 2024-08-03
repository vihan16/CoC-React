import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 5

  const [counter, setCounter] = useState(15)

  const addValue = ()=>{
    // console.log('clicked', counter);
    //counter = counter + 1 
    if (counter <= 19) {
      setCounter(counter + 1)
    } else {
      setCounter(counter)
    }
  }
  const removeValue = ()=>{
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai or react</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value:</button>
      <br />
      <button onClick= {removeValue}>remove value</button>
    </>
  )
}

export default App
