import React from 'react';
import { Link } from 'react-router';

const Post = ({ post }) => {
    const { id, title } = post
    return (
        <div className='border p-5 text-center'>
            <h2 >{title}</h2>
            <Link to={`/posts/${id}`}>
                <button className='btn mt-5'>Show Details</button>
            </Link>
        </div>
    );
};

export default Post;