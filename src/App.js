import React from 'react';
import HelloWorld from './Hello';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <HelloWorld color="red" name="props 연습" />
      <HelloWorld color="pink"/>
      <HelloWorld/>
    </Wrapper>
  );
}

export default App;
