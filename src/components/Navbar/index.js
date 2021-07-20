import React from 'react'
import Logo from './assignment-logo.jpeg'
import {NavLink} from 'react-router-dom'
import './index.css'

const navbar = ({selected}) => {
    return (
        <div className="navbar">
            <div className="logoholder"><img src={Logo} alt="LOGO" /></div>
            <div className="header">Article Hub</div>
            <div className="menu">
                <ul>
                    <li className={`${selected==="Home" ? "active" : ""}`}><NavLink to="/home">Home</NavLink></li>
                    <li className={`${selected==="Articles" ? "active" : ""}`}><NavLink to="/allDetails">Articles</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default navbar
