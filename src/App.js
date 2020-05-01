import React, { useRef, useState, useCallback } from 'react';
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

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
  }, []);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      active: false,
      username,
      phone
    };
    setUser((prevUsers) => [...prevUsers, user]);
    nextId.current++;
    setUserInput({
      username: "",
      phone: ""
    });
  }, [nextId, username, phone]);

  const onToggle = useCallback(userId => (
    setUser(prevUsers => 
      prevUsers.map(user => 
        user.id === userId
          ? {...user, active: !user.active} 
          : user
      )
    )
  ), []);

  const onRemove = useCallback(userId => (
    setUser(prevUser => prevUser.filter(user => user.id !== userId))
  ), []);

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
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </Wrapper>
  );
}

export default App;
