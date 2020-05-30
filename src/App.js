import React, { useReducer, createContext } from "react";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import Error from "./Error";
import Button from "./components/Button";
import "./components/App.scss";
import Buttons from "./Buttons";
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
          <Buttons color="violet">BUTTON</Buttons>
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
        </div>
      </Wrapper>
    </UserDispatch.Provider>
  );
}

export default App;
