import React from 'react'
import './Menu.css'
import {menu_list} from '../../assets/frontend_assets/assets'

export const Menu = ({category,setCategory}) => {
  return (
    <div className='menu' id='menu'>
        <h1>Explore Our Menu</h1>
        <p>Discover our diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience.</p>
        <div className="menu-list">
            {menu_list.map((item)=>{
                return(
                    <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}key={item.menu_name} className="menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}


