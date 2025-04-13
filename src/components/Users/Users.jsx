import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    // console.log(users);
    
    return (
        <div className='w-full lg:m-5 p-4 border rounded-2xl border-amber-500'>
            <h2 className='mb-5'>This is Users Page</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-2' >
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;