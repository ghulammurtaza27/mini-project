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
import { Redirect } from "react-router-dom";
import Typography from '@material-ui/core/Typography';


import { updatePassword, logout } from "../features/userSlice";


const useStyles = makeStyles((theme) => ({
 
  form: {
    marginTop: theme.spacing(1),
    width: '70vw'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(140deg, rgba(4,4,18,1) 0%, rgba(76,124,251,1) 100%)'
  },
  root: {
    width: '70vw'
  },
  container: {
    display: 'flex',
    flexDirection:'column',
    justifyContent:"center",
    alignItems:'center'
  }
}));


export default function UserDetail(props) {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const classes = useStyles();

  const [password, setPassword] = useState();

  const logoutHandler = e => {
    e.preventDefault();
    dispatch(logout())
  }

  const handleSubmit = e => {
    e.preventDefault();


    

    axios.put('/api/users/update', { password: password, _id: user._id})
      .then((res) => {
        dispatch(updatePassword({
          password: password
        }))
        setPassword('');
      })
  }

  

  if (user) {return (
    <div className={classes.container} >
      <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={logoutHandler}
        >
          Log out
        </Button>
      <Card className={classes.root}>
        <CardActionArea>
          <Typography component="h6" variant="h6">
            Username: {user.username}
          </Typography>
        </CardActionArea>
        <CardActionArea>
          <Typography component="h6" variant="h6">
            Password: {user.password}
          </Typography>
        </CardActionArea>
        <CardActionArea>
          <Typography component="h6" variant="h6">
            Age: {user.age}
          </Typography>
        </CardActionArea>
        <CardActionArea>
          <Typography component="h6" variant="h6">
            Role: {user.admin ? 'Admin' : 'Regular User'}
          </Typography>
        </CardActionArea>
      </Card>
      
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          value={password}
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
  
  )};

  return (
    <Redirect
    to={{
      pathname: "/login"
    }}
  />
  );
  
}