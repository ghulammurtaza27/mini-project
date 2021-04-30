import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import UserDetail from "./components/UserDetail";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice"


const App = () => {
  const user = useSelector(selectUser);

  const {
        state,
        dispatch
    } = useApplicationData();
      const userList = state.users.map((userin) => (<li key={userin.id} > {userin.first_name} {userin.last_name} {userin.email} </li>
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
