import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import UserDetail from "./components/UserDetail";
import UserList from "./components/UserList";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice"


const App = () => {
  const user = useSelector(selectUser);

  const {
        state
  } = useApplicationData();

  return (<div className="App" >
    <Router>
      <Switch>
      <Route path="/login" exact>
        <Login />  
      </Route>
      <ProtectedRoute users={state.users} exact path="/user-list" component={UserList} />
      {/* <Route path="/user-list" exact>
        <UserList users={state.users}/>
      </Route> */}
      <Route path="/user" exact>
        <UserDetail user={user}>

        </UserDetail>

      </Route>
      <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  </div >
  );
};

export default App;
