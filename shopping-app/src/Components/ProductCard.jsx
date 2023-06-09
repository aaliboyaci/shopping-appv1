import React, { useContext, useState } from 'react';
import './Style.css';
import { MainContext } from '../Context/MainProvider';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductCard(props) {
  const { product } = props;
  const { setProductNo, cart, dispatch } = useContext(MainContext);
  const [showAddToCartMessage, setShowAddToCartMessage] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setProductNo(product.id);
    navigate('/product');
  };

  const addToCart = () => {
    dispatch({ type: 'SET_CART', payload: [...cart, product] });
    setShowAddToCartMessage(true);
    setTimeout(() => {
      setShowAddToCartMessage(false);
    }, 900);
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
        ease: "linear",
        duration: 0.3,
        x: { duration: 0.2 }
      },
    },
  };

  return (
    <div className="product-card">
      <img src={product.image} alt="product name" onClick={handleClick} />
      <div className="product-info">
        <p onClick={handleClick}>{product.title}</p>
        <h3 onClick={handleClick}>${product.price}</h3>
      </div>
      <button className="addCart" onClick={addToCart}>
        Add to cart
      </button><AnimatePresence>
          {showAddToCartMessage && <b className="addedToCartMessage">
          
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit" >
            Added to cart</motion.div></b>}</AnimatePresence>
    </div>
  );
}
