import React from 'react'
import './Style.css';
import { CartContext, ProductContext } from '../App';
import { useContext } from 'react';


export default function Header(props) {
  const { cart, setCart } = useContext(CartContext);
  const { setPage } = useContext(ProductContext);
  return (
    <div className="Header">
      <div className="AppName"> <h1 onClick={() => props.setPage(0)}> Shopping App</h1></div>
      <div className="topRightWelcome"><h3>Welcome / Login</h3>
        <span><p className="itemCounter"><b>{cart.length}</b> items in your cart</p>
          <button className="goToCart" onClick={() => setPage(4)}>Go to cart</button></span></div>
      {console.log(cart)}
    </div>
  )
}
