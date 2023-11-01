import React, {useContext} from 'react';
import {C} from "./C";
import {Context} from "../App";

const B = () => {
    const messege = useContext(Context);
    return (
        <div>
            B: {messege}
            <C/>
        </div>
    );
};

export {B};