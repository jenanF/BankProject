import React from 'react'

const TransactionListItem = (props) => {
    let extra = props.date.indexOf('T');
    return (
        <div>
            <p style={{ color: props.type === 'withdraw' ? 'red' : 'green' }}>{props.type === 'withdraw' ? `- ${props.amount}` : props.amount}</p>
            <p>{props.date.slice(0, extra)}</p>
            <p>{props.type}</p>


        </div>
    )
}

export default TransactionListItem
