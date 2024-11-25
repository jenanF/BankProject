import React from 'react'
import Footer from './Footer'
import UserList from './UserList'
import instance from '../API/index'

async function getUsers() {
    const response = await instance.get('/mini-project/api/auth/users');
    console.log(response);
    return response;
}

const Users = () => {
    return (
        <div>
            <button onClick={getUsers}>hello</button>
            <UserList />
            <Footer />
        </div>
    )
}

export default Users
