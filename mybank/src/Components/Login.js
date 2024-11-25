import React from 'react'
import { data, Link } from 'react-router-dom'
import { login } from '../API/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


let page = '';

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ username: '', image: '', password: '' });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevents page refresh
        try {
            const response = await login(formData);  // Calls the register function
            console.log('Login successful:', response);
            console.log(data.token)

            navigate("/home");


            // redirect or show a success message here
        } catch (error) {
            console.error('Login failed:', error.response.data);
        }
    };
    return (
        <div>
            <h1>Login your Account</h1>
            <p>if you dont have an account <Link to={'/'}>Register here</Link></p>
            <label>Username</label>
            <input title='Username' name='username' placeholder='enter username' type='text' onChange={handleChange}></input>
            <Link>Forgot Password?</Link>
            <label>Password</label>
            <input title='password' name='password' placeholder='enter password' type='password' onChange={handleChange}></input>

            <button onClick={handleSubmit} id='register-btn'>Login</button>
        </div>
    )
}

export default Login
