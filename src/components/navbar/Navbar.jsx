import React, { useContext } from 'react'
import './Navbar.css'
import { useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

function Navbar({setShowLogin}) {

  const[menu, setMenu] = useState("home")

  const {gettotalcartamt} =useContext(StoreContext);

  return (
    <div className="navbar">
       <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
          <a href='#menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
          <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile app</a>
          <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="Search_icon" />
          <div className="navbar_search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="Cart_icon"  /></Link>
            <div className={gettotalcartamt()===0?"":"dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)} >sing in</button>
        </div>
    </div>
  )
}

export default Navbar