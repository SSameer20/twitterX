import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/login.css";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [page, setPage] = useState('login');

    // Login states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Register states
    const [user, setUser] = useState("");
    const [remail, setREmail] = useState("");
    const [rpassword, setRPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/application'); // Navigate to /application route after successful login
        }
    }, [isLoggedIn, navigate]);


    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post('http://localhost:3001/user/login', {
                email,
                password
            });

            const userId = res.data.user._id;
            localStorage.setItem('userId', userId);

            console.log(res.data);
            setIsLoggedIn(true);
            alert("Successfully Logged in");
            setEmail("");
            setPassword("");
        } catch (err) {
            console.error('Login error:', err);
            alert("Failed to Login");
        }

    }


    const handleRegister = async (event) => {
        event.preventDefault();

        // Validate passwords match
        if (rpassword !== rePassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const res = await axios.post('http://localhost:3001/user/register', {
                user,
                remail,
                rpassword
            });

            console.log(res.data);
            alert("Successfully Registered");
            setUser("");
            setREmail("");
            setRPassword("");
            setRePassword("");
        } catch (err) {
            console.error('Registration error:', err);
            alert("Failed to Register");
        }
    }

    return (
        <div className='authentication-page'>
            <div className="table">
                <div className="page-menu">
                    <button id='login' onClick={() => setPage('login')}>Login</button>
                    <button id='register' onClick={() => setPage('register')}>Register</button>
                </div>
                {page === 'login' ? (
                    <form id='login-form' onSubmit={handleLogin}>
                        <div className="login-email section">
                            <label htmlFor="login-page-email">Email: </label>
                            <input type="email" name="email" id="login-page-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="login-password section">
                            <label htmlFor="login-page-password">Password: </label>
                            <input type="password" name="password" id="login-page-password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className='login-buttons buttons'>
                            <button type="button" id='cancel' onClick={() => { }}>Cancel</button>
                            <button type="submit" id='login-submit'>Login</button>
                        </div>

                        <div>
                            <span>Don't have an account? <button type="button" onClick={() => setPage('register')}>Register here</button></span>
                        </div>
                    </form>
                ) : (
                    <form id='register-form' onSubmit={handleRegister}>
                        <div className="register-username section">
                            <label htmlFor="register-page-username">Username: </label>
                            <input type="text" name="username" id="register-page-username" value={user} onChange={(e) => setUser(e.target.value)} />
                        </div>

                        <div className="register-email section">
                            <label htmlFor="register-page-email">Email: </label>
                            <input type="email" name="email" id="register-page-email" value={remail} onChange={(e) => setREmail(e.target.value)} />
                        </div>

                        <div className="register-password section">
                            <label htmlFor="register-page-password">Password: </label>
                            <input type="password" name="password" id="register-page-password" value={rpassword} onChange={(e) => setRPassword(e.target.value)} />
                        </div>

                        <div className="register-password-retype section">
                            <label htmlFor="register-page-password-retype">Retype Password: </label>
                            <input type="password" name="retype-password" id="register-page-password-retype" value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
                        </div>

                        <div className='register-buttons buttons section'>
                            <button type="button" id='cancel' onClick={() => { }}>Cancel</button>
                            <button type="submit" id='register-submit'>Register</button>
                        </div>

                        <div>
                            <span>Already have an account? <button type="button" onClick={() => setPage('login')}>Login here</button></span>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}
