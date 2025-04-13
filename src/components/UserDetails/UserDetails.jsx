import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);
    
    const navigate = useNavigate();
    
    // const params = useParams();
    // console.log(params);
    const {userId} = useParams();
    console.log(userId);
    
    
    const {website,name} = user;
    return (
        <div className='mt-5 lg:m-5 rounded-lg p-5 space-y-3 border border-emerald-600'>
            <h1>User Details Here</h1>
            <h1>Name: {name}</h1>
            <h1>Website:{website} </h1>
            <button onClick={() => navigate(-1)} className='btn'>Go Back</button>
        </div>
    );
};

export default UserDetails;