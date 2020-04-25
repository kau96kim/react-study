import React from 'react';

function User({ user }) {
  return (
    <div><b>{user.name}</b> <span>{user.phone}</span></div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      name: "김종하",
      phone: "01027781912"
    },
    {
      id: 2,
      name: "마수경",
      phone: "01021118309"
    }
  ];

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