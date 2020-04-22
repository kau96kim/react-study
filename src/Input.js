import React, { useState } from 'react';

function Input() {
  const inputStyle = {
    "margin-right": 5,
    width: 100
  }
  const [inputs, setInput] = useState({
    name: "",
    nickname: ""
  });
  const { name, nickname } = inputs;

  function onChange(e) {
    const { name, value } = e.target;
    setInput({
      ...inputs,
      [name]: value
    });
  }
  function reset() {
    setInput({
      name: "",
      nickname: ""
    });
  }

  return (
    <div>
      <input 
        name="name" 
        style={inputStyle} 
        onChange={onChange} 
        value={name} 
        placeholder="name"
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