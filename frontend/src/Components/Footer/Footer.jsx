import React from 'react'
import '../Footer/Footer.css'
import footer_logo from '../../Frontend_Assets/logo_big.png'
import insta_icon from '../../Frontend_Assets/instagram_icon.png'
import pin_icon from '../../Frontend_Assets/pintester_icon.png'
import what_icon from '../../Frontend_Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>TrendCast</p>

        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>

        </ul>

        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={insta_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={pin_icon} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={what_icon} alt="" />
            </div>
        </div>

        <div className="footer-copyright">
            <hr />
            <p>Copyright@ 2024 -All Rights Reserved </p>
        </div>

    </div>
  )
}

export default Footer