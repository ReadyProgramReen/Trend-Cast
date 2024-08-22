import React, { useContext, useRef, useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../Frontend_Assets/logo.png'
import cart_icon from '../../Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import dropdrown_icon from '../../Frontend_Assets/nav_dropdown.png'
import { ShopContext } from '../../Context/ShopContext'


const Navbar = () => {

    const [menu, setMenu] = useState('Shop');

    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdownToggle = (e)=>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');

    }

  return (
    <div className='nav-bar'>


    <div className="nav-logo">
        
        <img src={logo} alt="" />    
        <Link className="no-underline" to={'/'}><p>TrendCast</p></Link>
        
    </div> 

    <img className='nav-dropdown' onClick={dropdownToggle} src={dropdrown_icon} alt="" />

    <ul  ref={menuRef} className="nav-menu">
        <Link className="no-underline" to={'/'}><li onClick={()=>{setMenu('Shop')}}>Shop{menu === 'Shop'?<hr></hr> :<></> }</li> </Link>
        <Link className="no-underline" to={'/mens'}><li onClick={()=>{setMenu('Men')}}>Men{menu === 'Men'?<hr></hr> :<></> }</li></Link>
        <Link className="no-underline" to={'/womens'}> <li onClick={()=>{setMenu('Women')}}>Women{menu === 'Women'?<hr></hr> :<></> }</li></Link>   
        <Link className="no-underline" to={'/kids'}><li onClick={()=>{setMenu('Kids')}}>Kids{menu === 'Kids'?<hr></hr> :<></> }</li> </Link>
           

    </ul> 


    <div className="nav-login-cart">
        <Link className="no-underline" to={'/login'}><button>Login</button></Link>
        <Link className="no-underline" to={'/cart'}><img src={cart_icon} alt="" /></Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
    </div> 

    </div>
  )
}

export default Navbar