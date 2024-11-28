import React from 'react'
import Footer from './Footer'
import TransactionListItem from './TransactionListItem'
import instance from '../API'
import { useQuery } from '@tanstack/react-query'
import Nav from './Nav'


async function getMyTransactions() {
    const response = await instance.get('/mini-project/api/transactions/my');
    console.log(response.data);
    return response.data;
}


const Transactions = () => {

    const { data, isFetching, isSuccess, refetch } = useQuery({
        queryKey: ['transactionsList'],
        queryFn: getMyTransactions,
    });

    return (
        <div>
            <Nav />
            <div style={{ display: 'flex' }}>
                <input type='text' placeholder='search'></input>
                <button onClick={() => { console.log(data) }}>Search</button>
            </div>

            <div style={{ display: 'flex' }}>
                <h2>Filter:</h2>

                <input type='radio' id='all' name="All"></input>
                <lable>All</lable>
                <input type='radio' id='depsit' name='Deposit'></input>
                <lable>Deposit</lable>
                <input type='radio' id='withdraw' name='Withdraw'></input>
                <lable>Withdraw</lable>
                <input type='radio' id='transfer' name='Transfer'></input>
                <lable>Transfer</lable>
                <input type='radio' id='date' name='By Date'></input>
                <lable>By Date</lable>
            </div>

            <div style={{ display: 'flex' }}>
                <lable>From</lable>
                <input type='date'></input>

                <lable>To</lable>
                <input type='date'></input>

            </div>

            <TransactionListItem />



            <Footer />
        </div>
    )
}

export default Transactions
