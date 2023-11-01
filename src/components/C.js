import React from 'react';
import {MyContext} from "../App";

const C = ({drill}) => {
    return (
        <div>
           C component
            {drill}
            <MyContext.Consumer>
                {
                    (value)=> {
                        return <h4>{value}</h4>
                    }
                }
            </MyContext.Consumer>
        </div>
    );
};

export {C};