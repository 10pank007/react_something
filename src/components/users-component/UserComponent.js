import React from 'react';
import {Link} from "react-router-dom";

const UserComponent = ({item}) => {
    let {id, name} = item;
    return (
        <div>
            <Link to={"details"} state={item}>{id} - {name}</Link>
        </div>
    );
};

export {UserComponent};