import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400'>Hello God</h1>

     
      <Card username="Rahul" btnText="Click Me" />
      <Card username="Sonai" btnText="Click Me"/>
      <Card username="Banik" btnText="Click Me"/>

      <Card/>   

    </>
  )
}

export default App
