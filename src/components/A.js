import React from 'react';
import {B} from "./B";

const A = ({drill}) => {
    return (
        <div>
            A component
            <B drill={drill}/>
        </div>
    );
};

export {A};