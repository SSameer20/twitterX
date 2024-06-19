import React, { } from 'react'
import logo from '../media/logo.jpg'
import profile from '../media/profile.png'
import '../styles/navigation.css'

export default function Navigation() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <p className="navbar-company-name">TwitterX</p>
            </div>
            <div className="navbar-right">
                <img src={profile} alt="User Profile" className="navbar-profile" />
            </div>
        </nav>
    )
}
