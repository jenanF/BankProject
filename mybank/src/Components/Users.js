import React from 'react'
import Footer from './Footer'
import UserList from './UserList'
import instance from '../API/index'
import Login from './Login'
//import getUsers from '../API/data'
import { useQuery } from "@tanstack/react-query";
import Nav from './Nav'


async function getUsers() {
    const response = await instance.get('/mini-project/api/auth/users');
    console.log(response.data);
    return response.data;
}



const Users = () => {

    const { data, isFetching, isSuccess, refetch } = useQuery({
        queryKey: ['usersList'],
        queryFn: getUsers,
    });

    const usersList = data?.map((user) => {
        return <UserList name={user.username} balance={user.balance} image={user.image} key={user.id} />

    })
    return (
        <div>
            <Nav />
            <div>{usersList}</div>
            <Footer />
        </div>
    )
}

export default Users
