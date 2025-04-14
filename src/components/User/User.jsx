import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserInfo from '../UserInfo/UserInfo';

const User = ({ user }) => {
    const [visitHome, setVisitHome] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const { id, name, email, phone } = user;
    
    const userInfoPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    
    if(visitHome){
        return <Navigate to="/"></Navigate>
    }

    return (
        <div className=' rounded-lg p-2 bg-amber-600'>
            <h2 className='text-2xl'>{name}</h2>
            <p><small>Email:{email}</small></p>
            <p><small>Phone : {phone}</small></p>

            <div className='flex justify-evenly items-center mt-5'>
                <div className='text-center bg-green-500 btn'>
                    <Link to={`/users/${id}`} >Show Details</Link>
                </div>
                <button onClick={() => setShowInfo(!showInfo)} className='btn text-center'>
                    {showInfo ? 'Hide' : 'Show info'}
                </button>
                <button onClick={() => setVisitHome(true)} className='btn bg-cyan-600'>Visit Home</button>
            </div>
            <div className='text-center'>
                {
                    showInfo && <Suspense fallback={<span>Loading...</span>}>
                        <UserInfo userInfoPromise={userInfoPromise}></UserInfo>
                    </Suspense>
                }
            </div>
            
        </div>
    );
};

export default User;