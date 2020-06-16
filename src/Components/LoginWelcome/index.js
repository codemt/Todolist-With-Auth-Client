import React from 'react'
import DisplayTodos from '../../Containers/DisplayTodos';
import './index.css'
export default function LoginWelcome(props) {
    const username = localStorage.getItem('username')
    return (
        <div className="welcome">
            <h1> Welcome to your dashboard, {username} </h1>
        <div className="items">
            <DisplayTodos />
        </div>
        </div>
    )
}
