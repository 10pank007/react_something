import React from 'react';

const MyComponent = ({children}) => {
    return (
        <div>
            MyComponent: {children}
        </div>
    );
};

export {MyComponent};