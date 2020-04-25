import React from 'react';

function User({ user, onRemove }) {
  return (
    <div>
      <button 
        onClick={() => onRemove(user.id)}
        style={{"margin-right": 5}}>x
      </button>
      <b>{user.username}</b>:
      <span> {user.phone}</span></div>
  );
}

function UserList( {users, onRemove} ) {
  return (
    <div>
      {
        users.map((user) => {
          return (<User user={user} key={user.id} onRemove={onRemove} />)
        })
      }
    </div>
  );
}

export default UserList;