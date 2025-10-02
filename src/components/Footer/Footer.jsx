import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="content-left">
                <img src={assets.logo} alt="Logo" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, vel nemo doloremque quae doloribus corporis, quaerat nulla voluptate veritatis labore praesentium qui sint dicta, odit hic quibusdam dolor nostrum exercitationem!</p>
                <div className="social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>
            </div>
            <div className="content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="content-right">
                <h2>Contact</h2>
                <ul>
                    <li>+91 99991 99991</li>
                    <li>tamato12@gamil.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright &copy; 2024 Tamato. All rights reserved.</p>
    </div>
  )
}

export default Footer