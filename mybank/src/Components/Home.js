import React from 'react'
import { Input, Switch } from '@mui/material'
import Footer from './Footer'
import '../style.css'
import instance from '../API'
import { useState } from 'react'
//import getMyInfo from './Profile'
import { useQuery, useMutation } from '@tanstack/react-query'
import Nav from './Nav'

let api = '/mini-project/api/transactions/deposit';


export async function getMyInfo() {
    const response = await instance.get('/mini-project/api/auth/me');
    console.log(response.data);
    return response.data;
}

async function Transfer(updatedBalance) {
    const response = await instance.put(api, updatedBalance);
    const { amount } = updatedBalance;
    console.log(response.data);
    return response.data;
}

const Home = () => {



    const [checked, setChecked] = useState(false) // false = withdraw   true = deposit
    const [amount, setAmount] = useState(0);
    const [userBalance, setUserBalance] = useState();


    const { data, isFetching, isSuccess, refetch } = useQuery({
        queryKey: ['transfer'],
        queryFn: Transfer,
    });

    const mutation = useMutation({
        mutationFn: (updatedData) => {
            Transfer(updatedData)
            const newBalance = checked
                ? userBalance - updatedData.amount
                : userBalance + updatedData.amount;
            setUserBalance(newBalance);

            alert("Transfer successful!");

        },
        // onSuccess: (updatedData) => {
        //     // Optimistic Update: Update the balance locally before waiting for the server response
        //     const optimisticBalance = checked
        //         ? userBalance + updatedData.amount
        //         : userBalance - updatedData.amount;
        //     setUserBalance(optimisticBalance);

        //     alert("Transfer successful!");

        // }

    })


    const handleChange = (event) => {
        setChecked(event.target.checked);
        if (checked) {
            api = '/mini-project/api/transactions/deposit'
        } else {
            api = '/mini-project/api/transactions/withdraw'

        }
        console.log(checked);
        console.log(api);
        console.log(data)
    };





    const handleSubmit = () => {
        const updatedBalance = {
            amount: amount


        };
        mutation.mutate(updatedBalance

        )
        console.log(amount);
        setUserBalance(userData.balance)

    }

    const { data: userData, refetch: refetchUser } = useQuery({
        queryKey: ['userInfo'],
        queryFn: getMyInfo,
    });

    return (
        <div >
            <Nav />
            <div className='home-main-div'>
                <div className='balance-div'>
                    <h2>Your Available Balance:</h2>
                    <h2 className='balance'>{userBalance ? userBalance : userData?.balance} KWD</h2>
                </div>

                <div className='deposit-div'>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <p>Deposit</p>
                        <Switch checked={checked} onChange={handleChange} />
                        <p>Withdraw</p>
                    </div>
                    <p>Amount</p>
                    <input onChange={(e) => { setAmount(e.target.value) }} placeholder='amount' type='number'></input>

                    <button onClick={handleSubmit} className='submit-btn'>Submit</button>
                </div>

                <Footer />

            </div>

        </div>
    )
}

export default Home
