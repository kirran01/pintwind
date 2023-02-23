import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { Link } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from 'axios';

const Comment = ({ thisPost, setThisPost, comment }) => {
    const { user, isLoggedIn, logOut } = useContext(AuthContext);
    return (
        <div className='flex my-2'>
            <div>
                <AccountCircleIcon />
            </div>
            {
                thisPost && comment &&
                <div>
                    <div className='flex'>
                        <p className='font-bold mr-2'>{comment.owner.username}</p>
                        <p>{comment.comment}</p>
                    </div>
                    <div className='flex'>
                        <p className='text-sm mr-4'>{new Date(thisPost.comments[0].day).toDateString().substring(3)}</p>
                        <MoreHorizIcon />
                    </div>
                </div>
            }
        </div>

    );
}

export default Comment;
