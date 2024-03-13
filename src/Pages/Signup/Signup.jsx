import React from 'react'
import './Signup.scss'   

const Signup = () => {
    return (
        <div className='signup-container'>
            <div className="signup-info">
                <h2>Sign Up Now</h2>
                <p>Sign up now to create a new account</p>

                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder='m@example.com' required />
                    <br />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required /> 
                    <button type="submit" className='signupBtn'>Signup</button> 
                </form>
 
            </div>
            <span className='backEf'></span>
        </div>
    )
}

export default Signup