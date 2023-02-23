import React from 'react';
import { Link } from 'react-router-dom';

const Preview = ({ post }) => {
    return (
        <div className='mb-3'>
            <div>
                <Link to={'/post/' + post._id}>
                    <img className='rounded-lg' src={post.image} alt="img" />
                </Link>
            </div>
        </div>
    );
}

export default Preview;
