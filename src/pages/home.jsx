import React from 'react';
import axios from 'axios';
import Preview from '../components/preview';
import { useState, useEffect } from 'react';

const Home = ({ filteredPosts, allPosts, setAllPosts }) => {
    return (
        <div>
            home page
            {
                filteredPosts.map(post => {
                    return (
                        <Preview key={post._id} post={post} />
                    )
                })
            }
        </div>
    );
}

export default Home;
