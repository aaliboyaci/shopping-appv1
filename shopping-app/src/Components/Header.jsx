import React from 'react'
import './Style.css';

export default function Header(props) {
  return (
    <div className="Header">
        <div className="AppName"> <h1 onClick={()=> props.setPage(0)}> Shopping App</h1></div>
        <div className="topRightWelcome"><h3>Welcome / Login</h3> <span><p className="itemCounter">X items in your cart</p><button className="goToCart">Go to cart</button></span></div>

    </div>
  )
}
