import React, { useState } from 'react'
import "../styles/login.css"

export default function Login() {
    const [page, setPage] = useState(true);
    return (
        <div className='authentication-page'>

            <div className="table">
                <div className="page-menu">
                    <button id='login' onClick={()=>setPage(true)}>Login</button>
                    <button id='register' onClick={()=>setPage(false)}>Register</button>
                </div>
                { page === true ? (
                     <form id='login-page'>
                     <div className="login-email section">
                         <label htmlFor="login-page-email">Email: </label>
                         <input type="email" name="email" id="login-page-email" />
                     </div>
 
                     <div className="login-password section">
                         <label htmlFor="login-page-password">Password: </label>
                         <input type="password" name="password" id="login-page-password" />
                     </div>
 
                     <div className='login-buttons buttons'>
                         <button type="reset" id='cancel'>Cancel</button>
                         <button type="submit" id='submit'>Login</button>
                     </div>
 
                     <button onClick={()=>setPage(false)}>New User? Try register</button>

 
                 </form>

                ) : (
                    <form id='register-page' >
                    
                    <div className="register-username section">
                        <label htmlFor="Register-page-username">Username: </label>
                        <input type="text" name="username" id="Register-page-email" />
                    </div>
                    <div className="register-email section">
                        <label htmlFor="Register-page-email">Email: </label>
                        <input type="email" name="email" id="Register-page-email" />
                    </div>

                    <div className="Register-password section">
                        <label htmlFor="Register-page-password">Password: </label>
                        <input type="password" name="password" id="Register-page-password" />
                    </div>

                    <div className="Register-password-retype section">
                        <label htmlFor="Register-page-password-retype">Retype-Password: </label>
                        <input type="password" name="retype-password" id="Register-page-password-retype" />
                    </div>

                    <div className='register-buttons buttons section'>
                        <button type="reset" id='cancel'>Cancel</button>
                        <button type="submit" id='submit'>Register</button>
                    </div>

                    
                </form>

                )}
               
            </div>

        </div>
    )
}
