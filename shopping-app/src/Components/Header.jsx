import React, { useEffect } from 'react'
import './Style.css';
import { CartContext, ProductContext } from '../App';
import { useContext } from 'react';
import cartimage from "../Assets/shopping-cart.png"


export default function Header() {

  const { cart, setCart, user, isLogin } = useContext(CartContext);
  const { setPage } = useContext(ProductContext);
  console.log(user);
  return (
    <div className="Header">
      <div className="AppName"> <h1 onClick={() => setPage(0)}> Shopping App</h1></div>
      <div className="topRightWelcome">
        {isLogin === 1 ? (
          <>
            <button className='goToCart' onClick={() => setPage(2)}>
              Welcome, <b>{user && user.name.firstname}</b>
            </button>
          </>
        ) : (
          <button className='goToCart' onClick={() => setPage(1)}>Login</button>
        )}
        <span>
          <p className="itemCounter"><b>{cart.length}</b> items in your cart</p>
          <button className="goToCart" onClick={() => setPage(4)}>
            <img style={{ width: "15px" }} src={cartimage} alt="cart"></img> Go to cart
          </button>
        </span>
      </div>
    </div>
  )
}
