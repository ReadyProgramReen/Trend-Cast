import React from 'react'
import '../Navbar/Navbar.css'
import nav_logo from  '../../assets/Admin_Assets/nav-logo.svg'
import nav_profile from  '../../assets/Admin_Assets/nav-profile.svg'


const Navbar = () => {
  return (
    <div className='nav-bar'>
        <img className='nav-logo' src={nav_logo } alt="" />
        <img className='nav-profile' src={nav_profile} alt="" />
    </div>
  )
}

export default Navbar