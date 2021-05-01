import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from "axios";
import { useDispatch } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions'

import { updatePassword } from "../features/userSlice";


const useStyles = makeStyles((theme) => ({
 
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(140deg, rgba(4,4,18,1) 0%, rgba(76,124,251,1) 100%)'
  },
  root: {
    width: '40vw'
  }
}));


export default function UserDetail(props) {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const classes = useStyles();

  const [password, setPassword] = useState();

  const handleSubmit = e => {
    e.preventDefault();

    // dispatch(updatePassword({
    //   password: password
    // }))

    // console.log(user);


    axios.put('/api/users/update', { password: password, id: user.id})
      .then((res) => {
        dispatch(updatePassword({
          password: res.data.password
        }))
      })
  }

  

  return (
    <div className={classes.root}>
      <Card>
        <CardActionArea>
          <h3>Username: {user.username}</h3>
        </CardActionArea>
        <CardActionArea>
        <h3>Password: {user.password}</h3>
        </CardActionArea>
        <CardActionArea>
        <h3>Age: {user.age}</h3>
        </CardActionArea>
        <CardActionArea>
        <h3>Role: {user.admin ? 'Admin' : 'Regular User'}</h3>
        </CardActionArea>
        
       
        
       
      </Card>
      
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          name="password"
          autoComplete="password"
          autoFocus
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Update Password
        </Button>
      </form>
    </div>
  
  );
}