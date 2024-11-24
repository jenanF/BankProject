import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <h1>Register your Account</h1>
            <p>if you do have an account <Link to={'/login'}>Login here</Link></p>
            <label>Username</label>
            <input title='Username' placeholder='enter username' type='text'></input>

            <label>Password</label>
            <input title='password' placeholder='enter password' type='password'></input>

            <input type='file'></input>

            <button id='register-btn'>Register</button>
        </div>
    )
}

export default Register
