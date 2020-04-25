import React from 'react';
import Wrapper from './Wrapper';
import Counter from './Counter';
import Input from './Input';
import UserList from './UserList';

function App() {
  return (
    <Wrapper>
      <Counter />
      <br />
      <Input />
      <br />
      <UserList />
    </Wrapper>
  );
}

export default App;
