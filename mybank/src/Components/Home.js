import React from 'react'
import { Input, Switch } from '@mui/material'
import Footer from './Footer'

const Home = () => {
    return (
        <div>

            <div>
                <h2>Your Available Balance:</h2>
                <h2>19000 KWD</h2>
            </div>

            <div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <p>Deposit</p>
                    <Switch />
                    <p>Withdraw</p>
                </div>
                <p>Amount</p>
                <input placeholder='amount' type='number'></input>
            </div>

            <Footer />

        </div>
    )
}

export default Home
