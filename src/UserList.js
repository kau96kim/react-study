import React from 'react';

function User({ user }) {
  return (
    <div><b>{user.name}</b> <span>{user.phone}</span></div>
  );
}

function UserList( {users} ) {
  return (
    <div>
      {
        users.map((user) => {
          return (<User user={user} key={user.id}/>)
        })
      }
    </div>
  );
}

export default UserList;