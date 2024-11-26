import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>

                <li>
                    <Link to={'/transactions'}>Transactions</Link>
                </li>

                <li>
                    <Link to={'/users'}>Users</Link>
                </li>



                <li>
                    <Link to={'/profile'}>Profile</Link>
                </li>

                <li>
                    <Link to={'/'}>Logout</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
