import React from 'react'
import { Link } from 'react-router-dom'
import { Register } from '../API/auth'
import { useState } from 'react'

const Registerr = () => {

    const [formData, setFormData] = useState({ username: '', image: '', password: '' });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();  // Prevents page refresh
        try {
            const response = await Register(formData);  // Calls the register function
            console.log('Registration successful:', response);
            // Optionally, redirect or show a success message here
        } catch (error) {
            console.error('Registration failed:', error.response.data);
        }
    };

    return (
        <div>
            <h1>Register your Account</h1>
            <p>if you do have an account <Link to={'/login'}>Login here</Link></p>
            <label>Username</label>
            <input title='Username' name="username" placeholder='enter username' type='text' onChange={handleChange}></input>

            <label>Password</label>
            <input title='password' name="password" placeholder='enter password' type='password' onChange={handleChange}></input>

            <input type='file' name="image" onChange={handleChange}></input>

            <button onClick={handleSubmit} id='register-btn'>Register</button>
        </div>
    )
}

export default Registerr
