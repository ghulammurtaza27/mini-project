import React from 'react';
import UserCard from "./UserCard";



export default function UserList(props) {


  return (
    
    <div>
      {props.users.map((user) => <UserCard user={user}/>)}
    </div>
  );
}