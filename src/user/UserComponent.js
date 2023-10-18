import React from 'react';

const UserComponent = ({item, chooseUser}) => {
    return (
        <div>
            {item.id} {item.name}
            <button onClick={()=>{
                chooseUser(item)
            }}>details</button>
        </div>
    );
};

export {UserComponent};