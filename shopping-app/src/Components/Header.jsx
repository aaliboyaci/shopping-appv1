import React, { useContext } from 'react';
import './Style.css';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../Context/MainProvider';
import cartimage from "../Assets/shopping-cart.png";

export default function Header() {
  const { cart, user, isLogin } = useContext(MainContext);
  const navigate = useNavigate();

  return (
    <div className="Header">
      <div className="AppName">
        <h1 onClick={() => { navigate("/shopping-appv1") }}>Shopping App</h1>
      </div>
      <div className="topRightWelcome">
        {isLogin === 1 ? (
          <>
            <button className='goToCart' onClick={() => { navigate("/shopping-appv1/user") }}>
              Welcome, <b>{user && user.name.firstname}</b>
            </button>
          </>
        ) : (
          <button className='goToCart' onClick={() => { navigate("/shopping-appv1/login") }}>Login</button>
        )}
        <span>
          <p className="itemCounter">
            <b>{cart.length}</b> items in your cart
          </p>
          <button className="goToCart" onClick={() => { navigate("/shopping-appv1/cart") }}>
            <img style={{ width: "15px" }} src={cartimage} alt="cart" /> Go to cart
          </button>
        </span>
      </div>
    </div>
  );
}
