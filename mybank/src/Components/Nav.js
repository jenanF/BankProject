import React from 'react'
import { Link } from 'react-router-dom'
import '../style.css'
import logo from '../images/banklogonav.jpg'
import { Logout } from '../API/auth'
import { useNavigate } from 'react-router-dom'




const Nav = () => {
    return (
        <nav className='nav-banner'>

            <img style={{ marginRight: 100 }} height={100} src={logo}></img>
            <ul>
                <li>
                    <Link className='link' to={'/home'}>Home</Link>
                </li>

                <li>
                    < Link className='link' to={'/transactions'}>Transactions</Link>
                </li>

                <li>
                    <Link className='link' to={'/users'}>Users</Link>
                </li>



                <li>
                    <Link className='link' to={'/profile'}>Profile</Link>
                </li>

                <li>
                    <Link onClick={Logout} style={{ marginLeft: 800 }} className='link' to={'/'}>Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
