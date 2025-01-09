import { useState } from 'react'
import Input from './components/Input'
import Output from './components/Output'



function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (newValue) => {
    setInputValue(newValue);
  }

  return (
    <>
      <Input onInputChange={handleInputChange} />

      <Output inputValue={inputValue} />
    </>
  )
}

export default App
