import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../Frontend_Assets/logo.png'
import cart_icon from '../../Frontend_Assets/cart_icon.png'


const Navbar = () => {

    const [menu, setMenu] = useState('Shop')

  return (
    <div className='nav-bar'>


    <div className="nav-logo">
        <img src={logo} alt="" />    
        <p>TrendCast </p>
    </div> 


    <ul className="nav-menu">
        <li onClick={()=>{setMenu('Shop')}}>Shop{menu === 'Shop'?<hr></hr> :<></> }</li>    
        <li onClick={()=>{setMenu('Men')}}>Men{menu === 'Men'?<hr></hr> :<></> }</li>    
        <li onClick={()=>{setMenu('Women')}}>Women{menu === 'Women'?<hr></hr> :<></> }</li>    
        <li onClick={()=>{setMenu('Kids')}}>Kids{menu === 'Kids'?<hr></hr> :<></> }</li>    

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