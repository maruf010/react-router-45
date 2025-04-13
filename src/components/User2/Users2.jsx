import React, { use } from 'react';

const Users2 = ({users2Promise}) => {
    const users = use(users2Promise);
    console.log("user 2 suspence data loading", users);
    
    return (
        <div>
            <h2>Users 2</h2>
        </div>
    );
};

export default Users2;