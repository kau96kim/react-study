import React, { useRef, useCallback, useContext } from 'react';
import UseInputs from './UseInputs';
import { UserDispatch } from './App';


function CreateUser() {
  const [form, onChange, reset] = UseInputs({
    username: "",
    phoneNumber: ""
  });
  const { username, phoneNumber } = form;
  const userId = useRef(0);
  const dispatch = useContext(UserDispatch);

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
  }, [username, phoneNumber, userId, reset, dispatch]);

  const inputStyle = {
    "marginRight": 5,
    width: 100
  }

  return (
    <div>
      <input 
        name="username"
        placeholder="이름"
        onChange={onChange}
        value={username}
        style={inputStyle}
      />
      <input 
        name="phoneNumber"
        placeholder="전화번호"
        onChange={onChange}
        value={phoneNumber}
        style={inputStyle}
      />
      <button onClick={onCreate}>Register</button>
    </div>
  )
}

export default React.memo(CreateUser);