import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { login } from "../features/userSlice";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';





const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 600,
  },
 
}));


export default function UserCard(props) {

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();


  const handleSubmit = e => {
    e.preventDefault();
    console.log("clicked", props.user._id);
    axios.get(`/api/users/${props.user._id}`)
      .then((res) => {
        dispatch(login({
          _id: res.data._id,
          username: res.data.username,
          password: res.data.password,
          age: res.data.age,
          admin: res.data.is_admin ? true : false
        }))
        history.push('/user')
      })

      
      
  }

  

  return (
    
    <div onClick={handleSubmit} className={classes.container}>
      <List component="nav" className={classes.root} aria-label="contacts">
        <ListItem button>
          <ListItemText primary={`User: ${props.user.username}`} secondary={`Age: ${props.user.age}`} />
        </ListItem>
       
      </List>
    </div>
  );
}