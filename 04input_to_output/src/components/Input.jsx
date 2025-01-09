import React, {useState} from 'react'

const Input = ({onInputChange}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        onInputChange(event.target.value); 
      };

  return (
    <div>
        <input placeholder='Write the text here' className='input' type="text" 
      value={inputValue} 
      onChange={handleInputChange} />
        <button className='bg-black text-white p-2 rounded ml-4' >Submit</button>
    </div>
  )
  
}

export default Input