import React, { useState, useRef } from 'react';

function Input() {
  const inputStyle = {
    "marginRight": 5,
    width: 100
  }

  const [inputs, setInput] = useState({
    name: "",
    nickname: ""
  });
  const { name, nickname } = inputs;
  const nameInput = useRef();

  function onChange(e) {
    const { name, value } = e.target;
    setInput((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
  }
  function reset() {
    setInput({
      name: "",
      nickname: ""
    });
    nameInput.current.focus();
  }

  return (
    <div>
      <input 
        name="name" 
        style={inputStyle} 
        onChange={onChange} 
        value={name} 
        placeholder="name"
        ref={nameInput}
      />
      <input 
        name="nickname" 
        style={inputStyle} 
        onChange={onChange} 
        value={nickname} 
        placeholder="nickname"
      />
      <button onClick={reset}>Reset</button>
      <div>
        <b>Input: </b>
        {name}({nickname})
      </div>
    </div>
  );
}

export default Input;