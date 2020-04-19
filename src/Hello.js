import React from 'react';
import './App.css';

function HelloWorld() {
    const style = {
        backgroundColor: 'gray',
        color: 'aqua',
        padding: '1rem',
        fontSize: 24
    }
    return (
    <>
        {/* 주석입니다 */}
        <div>태그는 꼭 닫혀있어야 함</div>
        <div>두개 이상의 태그는 하나의 태그로 묶여있어야 함</div>
        <div style={style}>Hello, world!</div>
        <br />
        <div className="gray-box"></div>
    </>
    );
}

export default HelloWorld;