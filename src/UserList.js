import React from 'react';

function User({ user, onRemove, onToggle }) {
  const activeStyle = {
    color: user.active ? "green" : "black",
    cursor: "pointer"
  };

  return (
    <div>
      <button 
        onClick={() => onRemove(user.id)}
        style={{"margin-right": 5}}>x
      </button>
      <b style={activeStyle} onClick={() => onToggle(user.id)}>{user.username}</b>:
      <span> {user.phone}</span></div>
  );
}

function UserList( {users, onRemove, onToggle} ) {
  return (
    <div>
      {
        users.map((user) => {
          return (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />)
        })
      }
    </div>
  );
}

export default UserList;