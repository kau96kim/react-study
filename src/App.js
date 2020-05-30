import React, { useReducer, createContext, useState } from "react";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import Error from "./Error";
import Button from "./components/Button";
import "./components/App.scss";
import Buttons from "./components/Buttons";
import CheckBox from "./components/CheckBox";
// import produce from "immer";

const initialState = {
  users: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: [...state.users, action.user],
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id),
      };
    default:
      throw new Error("Unhandled Action");
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;

  const [check, setCheck] = useState(false);
  const onChange = e => {
    setCheck(e.target.checked);
  };

  return (
    <UserDispatch.Provider value={dispatch}>
      <Wrapper>
        <div className="App">
          <Counter />
          <br />
          <CreateUser />
          <br />
          <UserList users={users} />
          <br />
          <Error />
          <br />
          <Buttons>BUTTON</Buttons>
          <br />
          <Buttons color="gray">BUTTON</Buttons>
          <br />
          <Buttons color="blue">BUTTON</Buttons>
          <br />
          <Buttons color="violet" outline>
            BUTTON
          </Buttons>
          <Button size="small">SMALL BUTTON</Button>
          <Button size="small" color="blue" fullWidth>
            SMALL BUTTON
          </Button>
          <Button outline>MEDIUM BUTTON</Button>
          <Button size="large" color="gray">
            LARGE BUTTON
          </Button>
          <br />
          <br />
          <CheckBox checked={check} onChange={onChange}>
            다음 약관에 모두 동의하기
          </CheckBox>
        </div>
      </Wrapper>
    </UserDispatch.Provider>
  );
}

export default App;
