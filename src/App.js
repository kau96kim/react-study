import React from 'react';
import HelloWorld from './Hello';

function App() {
  return (
    <>
      <HelloWorld color="red" name="props 연습" />
      <HelloWorld color="pink"/>
      <HelloWorld/>
    </>
  );
}

export default App;
