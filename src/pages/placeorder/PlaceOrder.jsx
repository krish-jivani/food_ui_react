import React, { useContext } from "react";
import "./Placeorder.css" ;
import { StoreContext } from "../../context/StoreContext";



const PlaceOrder = () => {

  const {gettotalcartamt} =useContext(StoreContext)

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Address" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text"  placeholder='Pincode' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-oder-right">
         <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>$ {gettotalcartamt()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$ {gettotalcartamt===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>$ {gettotalcartamt===0?0:gettotalcartamt()+2}</b>
            </div>
          </div>
        <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
