import React from 'react';
import './style.scss';

const Posts = ({ posts }) => (
    <div>
        {
            posts.map(post => (
                <div className='post' key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))
        }
    </div>
);

export default Posts;
