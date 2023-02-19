import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/posts/all`)
                if (res) {
                    console.log(res.data, 'rd')
                }
            } catch (err) {
                console.log(err)
            }
        }
        getPosts()
    }, [])
    return (
        <div>
            home page
        </div>
    );
}

export default Home;
