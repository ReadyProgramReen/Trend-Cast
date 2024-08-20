import React from 'react'
import '../Navbar/Navbar.css'
import logo from '../../Frontend_Assets/logo.png'
import cart_icon from '../../Frontend_Assets/cart_icon.png'


const Navbar = () => {
  return (
    <div className='nav-bar'>


    <div className="nav-logo">
        <img src={logo} alt="" />    
        <p>TrendCast </p>
    </div> 


    <ul className="nav-menu">
        <li>Shop<hr></hr></li>    
        <li>Men</li>    
        <li>Women</li>    
        <li>Kids</li>    

    </ul> 


    <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />

        <div className="nav-cart-count">0</div>
    </div> 

    </div>
  )
}

export default Navbar