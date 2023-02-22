import React from 'react';

const Preview = ({ post }) => {
    return (
        <div>
            <div>
                <img src={post.image} alt="img" />
            </div>
            <div>
                <p>{post.title}</p>
            </div>
        </div>
    );
}

export default Preview;
