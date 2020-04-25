import React, { useRef } from 'react';
import Wrapper from './Wrapper';
import Counter from './Counter';
import Input from './Input';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      name: "김종하",
      phone: "01027781912"
    },
    {
      id: 2,
      name: "마수경",
      phone: "01021118309"
    }
  ];

  const nextId = useRef(1);
  const onCreate = () => {
    nextId.current++;
  }

  return (
    <Wrapper>
      <Counter />
      <br />
      <Input />
      <br />
      <UserList users={users}/>
    </Wrapper>
  );
}

export default App;
