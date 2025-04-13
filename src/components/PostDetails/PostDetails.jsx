import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    return (
        <div>
            <h2 className='text-2xl'>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;