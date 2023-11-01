import React, {useContext} from 'react';
import {Context} from "../App";

const D = () => {
    const messege = useContext(Context);
    return (
        <div>
           D: {messege}
        </div>
    );
};

export {D};