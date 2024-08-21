import React from 'react'
import '../Pages/CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>

        <div className="login-signup-fields">
          <input type="text" placeholder='Your name' />
          <input type="email"  placeholder='Email Address'/>
          <input type="password" placeholder='Password' />

        </div>

        <button>Continue</button>
        <p className="loginsignup-login">Already have an account <span>Login here</span></p>
        <div className="login-signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, I agree to the terms of use & privacy policy</p>

        </div>
      </div>

    </div>
  )
}

export default LoginSignup