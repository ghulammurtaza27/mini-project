import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { login } from "../features/userSlice";



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


export default function UserCard(props) {

  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = e => {
    e.preventDefault();
    console.log("clicked", props.user.id);
    axios.get(`/api/users/${props.user.id}`)
      .then((res) => {
        console.log(res.data);
        dispatch(login({
          id: res.data.id,
          username: res.data.username,
          password: res.data.password,
          age: res.data.age,
          admin: res.data.is_admin ? true : false
        }))
        history.push('/user')
      })
  }

  

  return (
    <div onClick={handleSubmit}>
      {props.user.username} yo
    </div>
  );
}