import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUser, store} from "../store";

const Users = () => {

    const {users} = useSelector(store => store.user);
    const dispatch = useDispatch();
    const submit = (e) => {
        e.preventDefault();
        const name = e.target.userName.value;
        const user = {id: new Date().getTime(), name};
        dispatch(addUser({user}))
    }
    return (
        <div>
            <form onSubmit={submit}>
                <input type={"text"} placeholder={"name"} name={"userName"}/>
                <button>save</button>
            </form>
            {users.map(user =>  <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export {Users};