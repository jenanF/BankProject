import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <h1>Login your Account</h1>
            <p>if you dont have an account <Link to={'/'}>Register here</Link></p>
            <label>Username</label>
            <input title='Username' placeholder='enter username' type='text'></input>
            <Link>Forgot Password?</Link>
            <label>Password</label>
            <input title='password' placeholder='enter password' type='password'></input>

            <button id='register-btn'>Login</button>
        </div>
    )
}

export default Login
