import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
   let newObj = {
      name: "shorif",
      age: 23,
   }
   let newArr =[4,5,6,7,8,9];

  return (
    <>
     <Card names="Shorif" Obj ={newObj} arr={newArr} />
    </>
  )
}

export default App
