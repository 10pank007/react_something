import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import {getAllUsers, getUserById} from "./services/user.api.service";
import {UsersCompontent} from "./users/UsersCompontent";


function App() {

    let [users, setUsers] = useState(null)
 const chooseUser = (obj) => {
     setUsers(obj);
 }
  return (
    <div className="App">
        <h2>{users?.email}</h2>
        {
            users && <h2>{users.email}</h2>
        }
        <hr/>
        <h2>start</h2>
        <UsersCompontent chooseUser={chooseUser}/>
        <h2>end</h2>
        <hr/>
    </div>
  );
}

export default App;
