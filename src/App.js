import React, { useRef, useState } from 'react';
import Wrapper from './Wrapper';
import Counter from './Counter';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [userInput, setUserInput] = useState({
    username: "",
    phone: ""
  });
  const {username, phone} = userInput;

  const [users, setUser] = useState([]);
  const nextId = useRef(0);

  const onChange = (e) => {
    const {name, value} = e.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  }

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      phone
    };
    setUser((prevInput) => [...prevInput, user]);
    nextId.current++;
    setUserInput({
      username: "",
      phone: ""
    });
  }

  const onRemove = (userId) => {
    return setUser((prevUser) => {
      return prevUser.filter((user) => {
        return user.id !== userId;
      });
    });
  };

  return (
    <Wrapper>
      <Counter />
      <br />
      <CreateUser 
        username={username} 
        phone={phone} 
        onChange={onChange} 
        onCreate={onCreate}/>
      <br />
      <UserList users={users} onRemove={onRemove}/>
    </Wrapper>
  );
}

export default App;
