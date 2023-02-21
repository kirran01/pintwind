import axios from 'axios';
import e from 'cors';
import React from 'react';
import { useState, useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const Signup = ({ closeModal }) => {
    const { storeToken, authenticateUser } = useContext(AuthContext)
    const [signupInput, setSignupInput] = useState({
        email: '',
        username: '',
        password: ''
    })
    const handleSignupInput = (e) => {
        setSignupInput({ ...signupInput, [e.target.name]: e.target.value })
    }
    const signupUser = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`http://localhost:3000/auth/signup`)
            if (res) {
                console.log(res.data, 'rd signup')
                storeToken(res.data.authToken)
                authenticateUser()
                closeModal()
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <form className='flex flex-col items-center' onSubmit={signupUser}>
                <label>Email</label>
                <input className='border-2 rounded-lg border-slate-50' type="text" name='email' value={signupInput.email} onChange={handleSignupInput} />
                <label>Username</label>
                <input className='border-2 rounded-lg border-slate-50' type="text" name='username' value={signupInput.username} onChange={handleSignupInput} />
                <label>Password</label>
                <input className='border-2 rounded-lg border-slate-50' type="text" name='password' value={signupInput.password} onChange={handleSignupInput} />
                <button className='p-2 bg-black rounded-md text-white'>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
