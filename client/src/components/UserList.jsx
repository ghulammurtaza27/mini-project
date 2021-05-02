import React from 'react';
import useApplicationData from "../hooks/useApplicationData";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
  },
  root: {
    width: '100%',
    maxWidth: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  
}));


export default function UserList(props) {

    const {
      state
  } = useApplicationData();

  const user = useSelector(selectUser);

  const classes = useStyles();
  return (
    
    
    <div className={classes.paper}>
       <Typography component="h2" variant="h2">
          Users
        </Typography>
      { user && user.admin && state.users.map((user) => {
      if(!user.is_admin) {
        return (<List component="nav" className={classes.root} aria-label="contacts"><UserCard key={user._id} user={user}/></List>)
      }
      return null;
      })}
    </div>
  );
}