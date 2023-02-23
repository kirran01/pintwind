import React from 'react';
import axios from 'axios';
import Preview from '../components/preview';
import { useState, useEffect } from 'react';

const Home = ({ filteredPosts, allPosts, setAllPosts }) => {
    return (
        <div>
            <div class="p-4 columns-2 md:columns-4 lg:columns-5">
                {
                    filteredPosts.map(post => {
                        return (
                            <Preview key={post._id} post={post} />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Home;
