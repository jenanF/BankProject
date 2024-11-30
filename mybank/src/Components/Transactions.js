import React from 'react'
import Footer from './Footer'
import TransactionListItem from './TransactionListItem'
import instance from '../API'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import Nav from './Nav'
import '../style.css'


async function getMyTransactions() {
    const response = await instance.get('/mini-project/api/transactions/my');
    console.log(response.data);
    return response.data;
}


const Transactions = () => {

    const [filter, setFilter] = useState('all');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const { data, isFetching, isSuccess, refetch } = useQuery({
        queryKey: ['transactionsList'],
        queryFn: getMyTransactions,
    });

    const transactionList = data?.map((transaction) => {
        return <TransactionListItem type={transaction.type} amount={transaction.amount} date={transaction.updatedAt} key={transaction._id} />

    })

    const filtering = data?.filter((transaction) => {

        const transactionDate = new Date(transaction.updatedAt);
        const types = filter === 'all' || transaction.type === filter;


        const dateRange = filter === 'date' || (
            (!startDate || transactionDate >= new Date(startDate)) &&
            (!endDate || transactionDate <= new Date(endDate))
        );

        return types && dateRange;
    });


    const filteredList = filtering?.map((transaction) => {
        return <TransactionListItem type={transaction.type} amount={transaction.amount} date={transaction.updatedAt} key={transaction._id} />

    })

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleDateChange = (event) => {
        if (event.target.name === 'fromDate') {
            setStartDate(event.target.value);
        } else if (event.target.name === 'toDate') {
            setEndDate(event.target.value);
        }
    };

    return (
        <div>
            <Nav />
            <div className='transaction-main-div'>
                <div style={{ display: 'flex' }}>
                    <input type='text' placeholder='search'></input>
                    <button onClick={() => { console.log(data) }}>Search</button>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <h2>Filter:</h2>

                    <input type='radio' id='all' name="filter" value='all' checked={filter === 'all'} // Check if selected
                        onChange={handleFilterChange}></input>
                    <lable>All</lable>
                    <input type='radio' id='deposit' name='filter' value='deposit' checked={filter === 'deposit'} // Check if selected
                        onChange={handleFilterChange}></input>
                    <lable>Deposit</lable>
                    <input type='radio' id='withdraw' name='filter' value='withdraw' checked={filter === 'withdraw'} // Check if selected
                        onChange={handleFilterChange}></input>
                    <lable>Withdraw</lable>
                    <input type='radio' id='transfer' name='filter' value='transfer' checked={filter === 'transfer'} // Check if selected
                        onChange={handleFilterChange}></input>
                    <lable>Transfer</lable>
                    {/* <input type='radio' id='date' name='filter' value='date' checked={filter === 'date'} // Check if selected
                    onChange={handleDateChange}></input>
                <lable>By Date</lable> */}
                </div>

                <div className='dates-div' >
                    <lable>From</lable>
                    <input type='date' name='fromDate' onChange={handleDateChange}></input>

                    <lable>To</lable>
                    <input type='date' name='toDate' onChange={handleDateChange}></input>

                </div>
            </div>

            {/* {filter === 'all' ? transactionList : filteredList.length === 0 ? `There is no ${filter} transactions` : filteredList} */}
            {filter === 'all' && !startDate ? transactionList : filteredList.length === 0 ? `There is no ${filter} transactions` : filteredList}




            <Footer />
        </div>

    )
}

export default Transactions
