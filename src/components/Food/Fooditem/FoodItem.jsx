import React from 'react'
import './foodItem.css'
import { useState,useContext } from 'react'
import { assets } from '../../../assets/frontend_assets/assets'
import { StoreContext } from '../../../context/StoreContext'


const FoodItem = ({id,name,price,image,description}) => {

  const{cartItems,addToCart,removeFromCart}= useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-image-container">
            <img className="food-item-img" src={image} alt={name} />
            {
              !cartItems[id]?
              <img src={assets.add_icon_white} className='add' onClick={()=>addToCart(id)}/>
              :<div className='item-counter'>
                <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)}/>
                <p>{cartItems[id]}</p>
                <img src={assets.add_icon_green} alt="" onClick={()=>addToCart(id)}/>
              </div>
            }
        </div>
        <div className="food-info">
            <div className="food-item-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>    
    </div>
  )
}

export default FoodItem