import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import  Cart  from "./pages/cart/Cart"
import  PlaceOrder from "./pages/placeorder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Login from "./components/login/login";

const App = () => {

  const[showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
