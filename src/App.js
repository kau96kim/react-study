import React, { useRef, useReducer, useCallback } from 'react';
import Wrapper from './Wrapper';
import Counter from './Counter';
import UserList from './UserList';
import CreateUser from './CreateUser';
import UseInputs from './UseInputs';

const initialState = {
  users: []
}

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: [...state.users, action.user]
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map(user => user.id === action.id
          ? { ...user, active: !user.active }
          : user)
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      throw new Error("Unhandled Action");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = UseInputs({
    username: "",
    phoneNumber: ""
  });
  const { username, phoneNumber } = form;
  const { users } = state;
  const userId = useRef(0);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: userId.current,
        username,
        phoneNumber
      }
    });
    userId.current++;
    reset();
  }, [username, phoneNumber, userId, reset]);

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id
    });
  }, []);

  return (
    <Wrapper>
      <Counter />
      <br />
      <CreateUser 
        username={username}
        phoneNumber={phoneNumber}
        onChange={onChange}
        onCreate={onCreate}
      />
      <br />
      <UserList 
        users={users}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </Wrapper>
  );
}

export default App;
