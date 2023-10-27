import React from 'react';

const UserDetailsComponent = ({item}) => {
    return (
        <div>
            {item.username} - {item.email}
        </div>
    );
};

export {UserDetailsComponent};