import React from 'react';
import './App.css';

function HelloWorld( {color, name, isSpecial} ) {
  const style = {
    color
  }
  return (
    <div style={style}>
      {isSpecial ? <b>* </b> : null}
      Hello, world! name: {name}
      {isSpecial && <b> *</b>}
    </div>
  );
}

HelloWorld.defaultProps = {
  name: "이름 없음",
  color: "aqua",
  isSpecial: false
}

export default HelloWorld;