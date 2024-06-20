import React, { useContext, useEffect } from 'react';
import { UserInfo } from '../App'; // Import UserInfo context from App.js
import logo from '../media/logo.jpg';
import profile from '../media/profile.png';
import '../styles/navigation.css';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
    const navigate = useNavigate();
    const { loggedIn, setLoggedIn } = useContext(UserInfo);

    const handleLogout = () => {
        setLoggedIn(!loggedIn); // Example: logout logic
        // Additional logout logic can be added here
    
    };

    // useEffect = (() => {
    //         navigate("/")
    // },navigate, handleLogout)

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <p className="navbar-company-name">TwitterX</p>
            </div>
            <div className="navbar-right">
                <img src={profile} alt="User Profile" className="navbar-profile" />
                <button onClick={handleLogout}>
                    {loggedIn ? <p>Log out</p> : <p>Login</p>}
                </button>
            </div>
        </nav>
    );
}
