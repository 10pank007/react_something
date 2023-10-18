import React, {useEffect, useState} from 'react';

import {getAllUsers} from "../../services/user.api.service";
import {UserComponent} from "../user/UserComponent";

const UsersComponent = () => {
    let[users, setUsers] = useState([]);
    useEffect( ()=> {
        getAllUsers().then(value => setUsers(value));
    }, [])
    return (
        <div>
            {
               users.map(value => <UserComponent key={value.id} item={value}/>)
            }
        </div>
    );
};

export {UsersComponent};