import React from 'react';

function CreateUser( {username, phoneNumber, onChange, onCreate} ) {
  const inputStyle = {
    "marginRight": 5,
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
        name="phoneNumber"
        placeholder="전화번호"
        onChange={onChange}
        value={phoneNumber}
        style={inputStyle}
      />
      <button onClick={onCreate}>Register</button>
    </div>
  )
}

export default React.memo(CreateUser);