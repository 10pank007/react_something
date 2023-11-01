import React, {useContext} from 'react';
import {B} from "./B";
import {Context} from "../App";

const A = () => {
    const messege = useContext(Context);
    return (
        <div>
            A: {messege}
            <B/>
        </div>
    );
};

export {A};