import React from 'react'
import './Login.scss'
import { Link, NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login-container'>
            <div className="login-info">
                <h2>Welcome Back</h2> 
                <p>Enter your email below to login to your account</p>

                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder='m@example.com' required />
                    <br />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <NavLink>Forgot your password?</NavLink>

                    <button type="submit" className='loginBtn'>Login</button>
                    <button type="button" className='loginBtnGoogle'>Login with Google</button>
                </form>

                <p className='signUptext'>Don't have an account? <NavLink>Sign up</NavLink></p>
            </div>
            <span className='backEf'></span>
        </div>
    )
}

export default Login