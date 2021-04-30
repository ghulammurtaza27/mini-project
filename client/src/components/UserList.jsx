import React from 'react';
import UserCard from "./UserCard";
import { login } from "../features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";



export default function UserList(props) {

  const user = useSelector(selectUser);

  
  return (
    
    
    <div>
      { user && user.admin && props.users.map((user) => <UserCard key={user.id} user={user}/>)}
    </div>
  );
}