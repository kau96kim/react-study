import React, { useRef } from 'react';

function CreateUser( {username, phone, onChange, onCreate} ) {
  const inputStyle = {
    "margin-right": 5,
    width: 100
  }

  return (
    <div>
      <input 
        name="username"
        placeholder="이름"
        onChange={onChange}
        value={username}
        style={inputStyle}
      />
      <input 
        name="phone"
        placeholder="전화번호"
        onChange={onChange}
        value={phone}
        style={inputStyle}
      />
      <button onClick={onCreate}>Register</button>
    </div>
  )
}

export default CreateUser;