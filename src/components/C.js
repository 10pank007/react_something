import React, {useContext} from 'react';
import {D} from "./D";
import {Context} from "../App";

const C = () => {
    const messege = useContext(Context);
    return (
        <div>
            C: {messege}
            <D/>
        </div>
    );
};

export {C};