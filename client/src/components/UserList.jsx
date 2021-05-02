import React from 'react';
import useApplicationData from "../hooks/useApplicationData";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(8),
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
        return <UserCard key={user._id} user={user}/>
      }
      return null;
      })}
    </div>
  );
}