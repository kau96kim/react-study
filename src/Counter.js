import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

function Counter() {
  const buttonStyle = {
    margin: 3
  };

  const [number, dispatch] = useReducer(reducer, {
    counter: 0
  });

  const increase = () => {
    dispatch({
      type: "INCREMENT"
    });
  };

  const decrease = () => {
    dispatch({
      type: "DECREMENT"
    });
  };

  return (
    <div>
      <h1>{number.counter}</h1>
      <button onClick={increase} style={buttonStyle}>+</button>
      <button onClick={decrease} style={buttonStyle}>-</button>
    </div>
  );
}

export default React.memo(Counter);