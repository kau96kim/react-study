import React from 'react';
import './App.css';

function HelloWorld( {color, name} ) {
    const style = {
        color
    }
    return (
    <div style={style}>Hello, world! name: {name}</div>
    );
}

HelloWorld.defaultProps = {
    name: "이름 없음",
    color: "aqua"
}

export default HelloWorld;