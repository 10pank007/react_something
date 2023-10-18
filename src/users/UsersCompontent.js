import React, {useEffect, useState} from 'react';

import {getAllUsers} from "../services/user.api.service";
import {UserComponent} from "../user/UserComponent";

const UsersCompontent = ({chooseUser}) => {
    let [users, setUsers] = useState([])
    useEffect(()=>{
        getAllUsers().then(value => setUsers(value.data))
    }, [])
    return (
        <div>
            {users.map(value => <UserComponent chooseUser={chooseUser} item={value} key={value.id}/>)}
        </div>
    );
};

export {UsersCompontent};