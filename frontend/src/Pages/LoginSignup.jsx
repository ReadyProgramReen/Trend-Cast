import React, { useState } from 'react'
import '../Pages/CSS/LoginSignup.css'

const LoginSignup = () => {

  const [state, setState] =  useState('Login');
  const [formData,setFormData] = useState({
    username :'',
    password:'',
    email:'',

  })

  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login = async ()=>{
    console.log('Login executed ', formData);
    let responseData;
    await fetch('http://localhost:4000/login',{
      method: 'POST',
      headers:{
          Accept:'application/json',
          "Content-Type":'application/json'
      },
      body:JSON.stringify(formData),

    }).then((res)=>res.json())
      .then((data)=>responseData = data)

      if(responseData.success){
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      }


  }

  const signUp = async ()=>{
    console.log('Signup executed',formData)
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method: 'POST',
      headers:{
          Accept:'application/json',
          "Content-Type":'application/json'
      },
      body:JSON.stringify(formData),

    }).then((res)=>res.json())
      .then((data)=>responseData = data)

      if(responseData.success){
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      }

    
  }

  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>{state}</h1>

        <div className="login-signup-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your name' />:<></>}       
          <input name='email' value={formData.email} onChange={changeHandler} type="email"  placeholder='Email Address'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />

        </div>

        <button onClick={()=>{state === 'Login' ? login() :signUp() }}>Continue</button>
        {state === "Sign Up" ? <p className="loginsignup-login">Already have an account <span onClick={()=>{setState('Login')}} >Login here</span></p>
        : <p className="loginsignup-login">Create an Account ? <span onClick={()=>{setState("Sign Up")}}>Sign Up here</span></p> }
        <div className="login-signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, I agree to the terms of use & privacy policy</p>

        </div>
      </div>

    </div>
  )
}

export default LoginSignup