import React, { useState } from 'react';
import axios from 'axios';
import "../styles/login.css";

export default function Login() {
    const [page, setPage] = useState(true);

    // Login states
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Register states
    const [user, setUser] = useState("");
    const [remail, setREmail] = useState("");
    const [rpassword, setRPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(email + " " + password);
    }

    const handleRegister = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/user/register',{
        user,
        remail,
        rpassword
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
        // try {
        //     const response = await axios.post('http://localhost:3001/user/register', {
        //         user,
        //         remail,
        //         rpassword
        //     });

        //     if (response) {
        //         alert('User created successfully!');
        //         console.log(response);
        //     } else {
        //         alert('Failed to create user');
        //         console.log("failed to create");
        //     }
        // } catch (error) {
        //     console.error('There was an error creating the user!', error);
        // }

        setUser("");
        setREmail("");
        setRPassword("");
        setRePassword("");
    }

    return (
        <div className='authentication-page'>
            <div className="table">
                <div className="page-menu">
                    <button id='login' onClick={() => setPage(true)}>Login</button>
                    <button id='register' onClick={() => setPage(false)}>Register</button>
                </div>
                {page === true ? (
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
                            <button type="reset" id='cancel'>Cancel</button>
                            <button type="submit" id='login-submit'>Login</button>
                        </div>

                        <button onClick={() => setPage(false)}>New User? Try register</button>
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
                            <button type="reset" id='cancel'>Cancel</button>
                            <button type="submit" id='register-submit'>Register</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}
