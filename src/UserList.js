import React, { useEffect, useMemo } from 'react';

function CountActiveUsers(users) {
  return users.filter(user => user.active).length;
};

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const activeStyle = {
    color: user.active ? "green" : "black",
    cursor: "pointer"
  };

  // useEffect(() => {
  //   alert("정보 등록 완료");

  //   return () => {
  //     alert("정보 삭제 완료");
  //   };
  // }, []);

  return (
    <div>
      <button 
        onClick={() => onRemove(user.id)}
        style={{"marginRight": 5}}>x
      </button>
      <b style={activeStyle} onClick={() => onToggle(user.id)}>{user.username}</b>:
      <span> {user.phone}</span></div>
  );
});

function UserList( {users, onRemove, onToggle} ) {
  const count = useMemo(() => CountActiveUsers(users), [users]);

  return (
    <div>
      {
        users.map((user) => {
          return (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />)
        })
      }
      <br/>
      <div>활성화 유저 수: {count}</div>
    </div>
  );
};

export default React.memo(UserList);