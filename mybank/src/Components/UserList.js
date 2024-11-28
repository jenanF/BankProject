import React from 'react'

const UserList = (props) => {
    return (
        <div>
            <img src={props.image}></img>
            <h3>{props.name}</h3>
            <p>Balance: {props.balance} </p>
            <button onClick={props.onClick} name={props.key} id={props.key}>Transfer</button>
        </div>
    )
}

export default UserList
