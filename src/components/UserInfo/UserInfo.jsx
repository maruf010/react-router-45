import React, { use } from 'react';

const UserInfo = ({userInfoPromise}) => {
    const {name,username} = use(userInfoPromise)
    return (
        <div className='border mt-5 rounded-lg'>
            <p><small>Name : {name}</small></p>
            <p><small>User Name : {username}</small></p>
        </div>
    );
};

export default UserInfo;