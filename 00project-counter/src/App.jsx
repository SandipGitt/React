import { useState } from 'react'
import './App.css'

function App() {

  let  [counter, setCounter] = useState(15)

  //let counter = 15
  const addValue = () => {
    if(counter < 20){
      counter = counter + 1
      setCounter(counter)
    }else{
      alert("Limit exceeded")
    }
  }
  const removeValue = () => {
    if (counter <= 0){
      alert("Limit exceeded")
  } else {
    counter = counter - 1
    setCounter(counter)
  }
}
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      > Decrease value</button>
    </>
  )
}

export default App
