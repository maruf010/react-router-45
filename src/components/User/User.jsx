import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name,email,phone} = user;
    return (
        <div className=' rounded-lg p-2 bg-amber-600'>
            <h2 className='text-2xl'>{name}</h2>
            <p><small>Email:{email}</small></p>
            <p><small>Phone : {phone}</small></p>
            <div className='text-center mt-5'>
                <Link to={`/users/${id}`} >Show Details</Link>
                </div>
        </div>
    );
};

export default User;