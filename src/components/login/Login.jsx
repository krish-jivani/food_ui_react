import React, { useState } from 'react'
import './login.css'
import { assets } from '../../assets/frontend_assets/assets'

const Login = ({setShowLogin}) => {

    const[currState,setCurrState]=useState("Login")

  return (
    <div className='login'>
        <form action="" className="login-container">
            <div className="login-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder='Enter Your Name' required/>}
                <input type="email" placeholder='Enter Your Email  ' required/>
                <input type="password" placeholder='Enter password' required />
            </div>
            <button>{currState==="sing up"?"create account":"Login"}</button>
            <div className="login-condition">
                <input type="checkbox" required/>
                <p>By contiinuing, i agree to the terms of use & privacy policy</p>
            </div>
            {currState==="Login"
            ?<p>create new account ? <span onClick={()=>setCurrState("sign-up")}>Click Here</span></p>
            :<p>Already have account ? <span onClick={()=>setCurrState("Login")}>Login</span></p>
            }
        </form>
    </div>
  )
}

export default Login