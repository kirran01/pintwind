import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [loginInput, setLoginInput] = useState({
        username: '',
        password: ''
    })
    const handleLoginInput = (e) => {
        setLoginInput({ ...loginInput, [e.target.name]: [e.target.value] })
    }
    return (
        <div>
            <form action="">
                <label htmlFor="">Username</label>
                <input type="text" />
                <label htmlFor="">Password</label>
                <input type="text" />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;
