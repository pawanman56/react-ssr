import React from 'react';

const Posts = ({ posts }) => (
    <div>
        <style jsx>
        {`
            .post {
                max-width: 500px;
                margin: 0 auto 20px auto;
            }

            .post h2 {
                margin-bottom: 10px;
            }
        `}
        </style>

        {
            posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))
        }
    </div>
);

export default Posts;
