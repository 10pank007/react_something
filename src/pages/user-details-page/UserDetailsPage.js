import React from 'react';
import {useLocation} from "react-router-dom";
import {UserDetailsComponent} from "../../components/user-details-component/UserDetailsComponent";

const UserDetailsPage = () => {
    let {state} = useLocation();
    return (
        <div>
            <UserDetailsComponent item={state}/>
        </div>
    );
};

export {UserDetailsPage};