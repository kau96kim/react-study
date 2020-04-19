import React from 'react';

function Wrapper( {children} ) {
    const style = {
        border: '2px solid black',
        padding: 16,
        width: 500,
        borderRadius: 10,
        margin: 10
    }

    return (
    <div style={style}>{children}</div>
    );
}

export default Wrapper;