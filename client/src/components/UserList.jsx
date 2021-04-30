import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import UserCard from "./UserCard";



const useStyles = makeStyles((theme) => ({
 
  form: {
    width: '60%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(140deg, rgba(4,4,18,1) 0%, rgba(76,124,251,1) 100%)'
  },
}));


export default function UserList(props) {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const classes = useStyles();


  const handleSubmit = e => {
    e.preventDefault();
    console.log("clicked", e);
  }

  

  return (
    
    <div>
      {props.users.map((user) => <UserCard user={user}/>)}
    </div>
  );
}