import React from 'react';
import {C} from "./C";

const B = ({drill}) => {
    return (
        <div>
            B component
            <C drill={drill}/>
        </div>
    );
};

export {B};