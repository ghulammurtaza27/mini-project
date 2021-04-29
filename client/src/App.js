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
    <h1> Users </h1>
    <ul> {userList} </ul>
    <Login />
  </div >
  );
};

export default App;
