import './App.css';
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
    const {
        state,
        dispatch
    } = useApplicationData();
      const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
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
        <h1> User Detail </h1>
      </Route>
      </Switch>
    </Router>
  </div >
  );
};

export default App;
