import React, { useContext } from 'react';
import './Style.css';
import backimg from "../Assets/backar.png"
import { motion, AnimatePresence } from 'framer-motion';
import { MainContext } from '../Context/MainProvider';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cart, dispatch, setProductNo } = useContext(MainContext);
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const navigate = useNavigate();

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId });
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0.3,
        x: { duration: 0.2 }
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.25
      }
    },
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart.length > 0 ? (
        <>
          <button className="clearCart" onClick={() => dispatch({ type: 'CLEAR_CART' })}>
            Clear Cart
          </button>
          <br /> <br />
        </>
      ) : (
        <>
          <button className="goToCart" onClick={() => navigate('/')}>
            <img style={{ width: '13px' }} src={backimg} alt="Back to shopping" />
            Back to shopping
          </button>
          <br />
          <br />
        </>
      )}

      <div>
        <AnimatePresence>
          {cart.map((item) => (
            <motion.div
              className="cartItem"
              key={item.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <img className="cartImage" src={item.image} alt={item.title} onClick={() => { setProductNo(item.id); navigate('/product'); }} />
              <p onClick={() => { setProductNo(item.id); navigate('/product'); }}>{item.title}</p>
              <div className="pricetag">
                <h2>Price: ${item.price}</h2>
                <p className="clearCart" onClick={() => removeFromCart(item.id)}>
                  <i>Remove item</i>
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <br />
      {console.log(cart)}
      <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
    </div>
  );
}
