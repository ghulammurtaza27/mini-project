import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from "../features/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import axios from "axios";





function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Ghulam Murtaza
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    background: 'linear-gradient(140deg, rgba(4,4,18,1) 0%, rgba(76,124,251,1) 100%)'
    },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(140deg, rgba(4,4,18,1) 0%, rgba(76,124,251,1) 100%)'
  },
}));

// const userInfo = [{
//   username: 'test',
//   password: 'test',
//   admin: true,
//   age: 28
// },
// {
//   username: 'test1',
//   password: 'test1',
//   admin: false,
//   age: 27
// },
// ];

export default function Login() {
  // const [open, setOpen] = React.useState(false);
	const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const classes = useStyles();
  const history = useHistory();
 
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

	const handleSubmit = e => {
    e.preventDefault();

    axios.get('/api/users')
      .then((res) => {
        console.log(res.data)
        // axios.post(`/api/users/`, { username: 'princess', password: 'test', age: 5, is_admin: false})
        for (let singleUser of res.data) {
          if(singleUser.username === username && singleUser.password === password) {
            dispatch(login({
              _id: singleUser._id,
              username: username,
              password: password,
              age: singleUser.age,
              admin: singleUser.is_admin ? true : false
            }))
            console.log('line 96 Login')
              if(singleUser.is_admin) {
                history.push('/user-list')
              }
              else {
                history.push('/user')
              }
              return; 
          }
        }
      })

    

    

    

    
  }

  // if (user) {
  //   history.push(`/myshows`);
  // }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
						onChange={e => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
						onChange={e => setPassword(e.target.value)}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          {/* { error && <LoginError />} */}
          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
