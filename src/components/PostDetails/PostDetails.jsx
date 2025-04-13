import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className='text-center'>
            <h2 className='text-2xl'>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => navigate(-1) } className='btn my-5'> Go Back</button>
        </div>
    );
};

export default PostDetails;