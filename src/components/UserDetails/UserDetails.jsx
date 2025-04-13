import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);
    const {website,name} = user;
    
    return (
        <div className='mt-5 lg:m-5 rounded-lg p-5 space-y-3 border border-emerald-600'>
            <h1>User Details Here</h1>
            <h1>Name: {name}</h1>
            <h1>Website:{website} </h1>
        </div>
    );
};

export default UserDetails;