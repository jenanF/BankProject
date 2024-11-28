import React from 'react'
import Footer from './Footer'
import UserList from './UserList'
import instance from '../API/index'
import Login from './Login'
//import getUsers from '../API/data'
import { useQuery } from "@tanstack/react-query"
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import Nav from './Nav'


async function getUsers() {
    const response = await instance.get('/mini-project/api/auth/users');
    console.log(response.data);
    return response.data;
}

async function TransferToUser(amountTransfered, username) {
    const response = await instance.put(`/mini-project/api/transactions/transfer/${username}`, amountTransfered);

    console.log(response.data);
    return response.data;
}


const Users = () => {

    const [amount, setAmount] = useState(0);
    const [userBalance, setUserBalance] = useState();
    const [recipient, setRecipient] = useState('');

    const { data, isFetching, isSuccess, refetch } = useQuery({
        queryKey: ['usersList'],
        queryFn: getUsers,
    });

    const { data: transferData, isFetching: fetching, isSuccess: success, refetch: refetching } = useQuery({
        queryKey: ['transferToUser'],
        queryFn: TransferToUser,
    });


    const usersList = data?.map((user) => {
        return <UserList name={user.username} balance={user.balance} image={user.image} key={user._id} onClick={() => { setRecipient(user.username); handleTransfer() }} />

    })

    const handleTransfer = async () => {
        if (!amount) {
            return alert('Please enter an amount.');
        }

        const amountTransfered = amount;
        try {
            const response = await TransferToUser(amountTransfered, recipient);  // Call the transfer function
            console.log(response);
            alert('Transfer successful!');
        } catch (error) {
            console.error(error);

        }
    }
    return (
        <div>
            <Nav />
            <p>Amount</p>
            <input onChange={(e) => { setAmount(e.target.value) }} placeholder='amount' type='number' value={amount}></input>
            <div>{usersList}</div>
            <Footer />
        </div>
    )
}

export default Users
