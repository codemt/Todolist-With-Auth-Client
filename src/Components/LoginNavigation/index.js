import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
export default function LoginNavigation() {
    return (
        <div className="loginNavigation">
            <ul>
            <li> <Link to="/"> Login</Link>  </li>
            <li> <Link to="/signup"> Sign Up </Link> </li>
            </ul>
        </div>
    )
}
