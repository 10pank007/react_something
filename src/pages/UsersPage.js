import React from 'react';
import {useNavigate} from "react-router-dom";

const UsersPage = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h2>Users Page</h2>
            <button onClick={()=> navigate('/posts?id=5&name=max')}>to Post Page</button>
        </div>
    );
};

export {UsersPage};