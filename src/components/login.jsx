import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';

const Login = ({ closeModal }) => {
    const { storeToken, authenticateUser } = useContext(AuthContext)
    const [loginInput, setLoginInput] = useState({
        username: '',
        password: ''
    })
    const handleLoginInput = (e) => {
        setLoginInput({ ...loginInput, [e.target.name]: e.target.value })
    }
    const loginUser = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`http://localhost:3000/auth/login`, {
                username: loginInput.username,
                password: loginInput.password
            })
            if (res) {
                console.log(res.data, 'rd')
                storeToken(res.data.authToken)
                authenticateUser()
                closeModal()
            }
        } catch (err) {
            console.log(err, '<--loginerr')
        }
    }
    return (
        <div>
            <form className='flex flex-col items-center' onSubmit={loginUser}>
                <label>Username</label>
                <input className='border-2 rounded-lg border-slate-50' type="text" name='username' value={loginInput.username} onChange={handleLoginInput} />
                <label>Password</label>
                <input className='border-2 rounded-lg border-slate-50' type="text" name='password' value={loginInput.password} onChange={handleLoginInput} />
                <button className='p-2 bg-black rounded-md text-white'>Login</button>
            </form>
        </div>
    );
}

export default Login;
