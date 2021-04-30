import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice"


const App = () => {
  const user = useSelector(selectUser);

  const {
        state
    } = useApplicationData();
      const userList = state.users.map((userin) => (<li key={userin.id} > {userin.username} {userin.password} {`${userin.is_admin}`} {userin.age} </li>
  ));
  return (<div className="App" >
    <Router>
      <Switch>
      <Route path="/login" exact>
        <Login />  
      </Route>
      <Route path="/user-list" exact>
        <h1> Users </h1>
        <ul> {userList} </ul>
        <UserList users={state.users}/>
      </Route>
      <Route path="/user" exact>
        <UserDetail user={user}>

        </UserDetail>

      </Route>
      </Switch>
    </Router>
  </div >
  );
};

export default App;
