import React, { useState, useEffect } from 'react';

function Counter() {
  const buttonStyle = {
    margin: 3
  }

  const [number, setNumber] = useState(0);

  useEffect(() => {
    return () => {
      alert("숫자 바뀜");
    };
  }, [number]);

  const increase = () => {
    setNumber(prevNumber => prevNumber + 1);  
  }

  const decrease = () => {
    setNumber(prevNumber => prevNumber - 1);
  }

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase} style={buttonStyle}>+</button>
      <button onClick={decrease} style={buttonStyle}>-</button>
    </div>
  );
}

export default Counter;