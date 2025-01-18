import { useState,useCallback } from 'react'

import './App.css'

function App() {
 
  const [length, setLength] = useState(8);
  const [numberAlowed, setNumberAlowed] = useState(false);
  const [charAlowed, setCharAlowed] = useState(false);
  const [password,setPassword] = useState("");

  const passworGenerator= useCallback(()=>{
    let password = "";
    let srt = "";
  }, [length,numberAlowed,charAlowed,setPassword])

  return (
    <>
      <h1 className='bg-slate-400 text-4xl'>Password Generator</h1>
    </>
  )
}

export default App
