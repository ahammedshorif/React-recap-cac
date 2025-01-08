import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {

  const [count,setCount]=useState(5)
  function valueplus(){
    if(count<20){
      setCount(count+1)
    }
    
    
  }
  function valueMinus(){
    if(count>0){
      setCount(count-1)
    }
  }
  

  return (
    <>
      <h2>counter: {count}</h2>
      <button onClick={valueplus}>counter+</button>
      <br />
      <br />
      <button onClick={valueMinus}>counter-</button>
    </>
  )
}

export default App
