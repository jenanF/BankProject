import React from 'react'
import '../style.css'

const UserList = (props) => {
    return (
        <div className='users-div'>
            <img className='image-user' src={props.image}></img>
            <h3>{props.name}</h3>
            <p>Balance: {props.balance} </p>
            <button className='btn' onClick={props.onClick} name={props.key} id={props.key}>Transfer</button>
        </div>
    )
}

export default UserList
