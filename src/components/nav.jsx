import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PintrestLogo from '../../public/img/pint.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Searchbar from './searchbar';
import { useContext } from 'react';
import { useState } from 'react'

const Nav = () => {
    return (
        <nav className='bg-white'>
            <ul className='flex p-2 bg-slate-50'>
                <div className='flex items-center shrink-0'>
                    <li className='min-w-8'>
                        <img className='h-8' src={PintrestLogo} alt="logo" />
                    </li>
                </div>
                <div className='flex'>
                    <Link className='mx-2'>
                        <button className='bg-black rounded-full text-white p-3'>Home</button>
                    </Link>
                    <Link className='mx-2'>
                        <button className='p-3'>Create</button>
                    </Link>
                </div>
                <input className='border-2 rounded-full border-slate-100 flex-grow' type="text" />
                <div className='flex items-center'>
                    <NotificationsIcon style={{ color: 'gray', fontSize: 30 }} />
                    <ChatBubbleIcon style={{ color: 'gray', fontSize: 30 }} />
                    <AccountCircleIcon />
                    <ExpandMoreIcon style={{ color: 'gray', fontSize: 30 }} />
                </div>
            </ul>
        </nav>
    );
}

export default Nav;
