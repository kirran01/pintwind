import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PintrestLogo from '../../public/img/pint.png'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Signup from '../components/signup'
import Login from './login';
import Modal from 'react-modal';
import Searchbar from './searchbar';
import { useContext } from 'react';
import { useState } from 'react'

const Nav = () => {
    const [dropdown, setDropdown] = useState(false)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [loginOrSignup, setLoginOrSignup] = useState('')
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const handleDropdown = () => {
        if (dropdown) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            borderRadius: '30px',
            transform: 'translate(-50%, -50%)',
            marginTop: '35px',
            zIndex: 1
        },
    }
    return (
        <nav className='bg-white sticky'>
            <ul className='flex p-2'>
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
                    <Link to={'/profile'}>
                    <AccountCircleIcon />
                    </Link>
                    <div className={`animate-rotate duration-500 ease-in`}>
                        <ExpandMoreIcon onClick={handleDropdown} style={{ color: 'gray', fontSize: 30 }} />
                    </div>
                    {dropdown && <div className='flex flex-col bg-slate-100 rounded-md p-1 absolute top-0'>
                        <button className='p-2 rounded-lg bg-white hover:bg-slate-50 m-1' onClick={() => {
                            openModal()
                            setLoginOrSignup('login')
                        }}>Login</button>
                        <button className='p-2 rounded-lg bg-white hover:bg-slate-50 m-1' onClick={() => {
                            openModal()
                            setLoginOrSignup('signup')
                        }}>Signup</button>
                        <button className='p-2 rounded-lg bg-white hover:bg-slate-50 m-1' onClick={handleDropdown}>Cancel</button>
                    </div>}
                </div>
            </ul>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
            >
                {loginOrSignup === 'login' ? <Login closeModal={closeModal} /> : <Signup closeModal={closeModal} />}
            </Modal>
        </nav>
    );
}

export default Nav;
