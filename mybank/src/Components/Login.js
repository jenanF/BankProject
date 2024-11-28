import React from 'react'
import { data, Link } from 'react-router-dom'
import { login } from '../API/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../images/codedbanklogo.jpg'
import '../style.css'


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
        <div className='reg-main-div'>
            <img className='logo' src={logo}></img>
            <div className='reg-div'>
                <h1>Login your Account</h1>
                <p className='login-text'>if you dont have an account <Link to={'/'}>Register here</Link></p>
                <label>Username</label>
                <input className='input-reg' title='Username' name='username' placeholder='enter username' type='text' onChange={handleChange}></input>
                <div className='password-line'>
                    <label>Password</label>
                    <Link className='forgot-pass'>Forgot Password?</Link>
                </div>
                <input className='input-reg' title='password' name='password' placeholder='enter password' type='password' onChange={handleChange}></input>

                <button className='reg-button' onClick={handleSubmit} id='register-btn'>Login</button>
            </div>
        </div>
    )
}

export default Login
