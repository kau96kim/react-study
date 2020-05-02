import React, { useMemo, useContext } from 'react';
import { UserDispatch } from './App';

function CountActiveUsers(users) {
  return users.filter(user => user.active).length;
};

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);
  const activeStyle = {
    color: user.active ? "green" : "black",
    cursor: "pointer"
  };

  return (
    <div>
      <button 
        onClick={() => dispatch({type: "REMOVE_USER", id:user.id})}
        style={{"marginRight": 5}}>x
      </button>
      <b style={activeStyle} onClick={() => dispatch({type: "TOGGLE_USER", id: user.id})}>{user.username}</b>:
      <span> {user.phoneNumber}</span></div>
  );
});

function UserList( { users } ) {
  const count = useMemo(() => CountActiveUsers(users), [users]);

  return (
    <div>
      {
        users.map((user) => {
          return (<User user={user} key={user.id} />)
        })
      }
      <br/>
      <div>활성화 유저 수: {count}</div>
    </div>
  );
};

export default React.memo(UserList);