import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(0)


  //let counter = 0
const addvalue =()=>{
  console.log("clicked",counter)
 // counter = counter+1
  setCounter(counter+1)
}

const removevalue = () => {
  console.log("clicked",counter)
  setCounter(counter-1)
}

  return (
    <>
      <h1>Hello God</h1>
      <h2>Counter value:{counter}</h2>
      <button 
      onClick={addvalue}>Add value</button>
      <br/>
      <button 
      onClick={removevalue}>Decrease Value value</button>
    </>
  )
}

export default App
