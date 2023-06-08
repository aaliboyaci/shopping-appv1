import React, { useContext, useState, useEffect } from 'react';
import './Style.css';
import { MainContext } from '../Context/MainProvider';
import Loading from './Loading';
import backimg from "../Assets/backar.png"
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


export default function ProductPage() {
  const { productNo, isLoading, setIsLoading, cart, dispatch } = useContext(MainContext);
  const [product, setProduct] = useState(null);
  const [showAddToCartMessage, setShowAddToCartMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productNo}`);
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    setIsLoading(true);
    fetchProduct();
  }, [productNo, setIsLoading]);

  const addToCart = () => {
    dispatch({ type: 'SET_CART', payload: [...cart, product] });
    setShowAddToCartMessage(true);
    setTimeout(() => {
      setShowAddToCartMessage(false);
    }, 870);
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
    <div>
      {isLoading && <Loading />}
      {product && (
        <div className="product-page">
          <div className="product-image">
            <img src={product.image} alt="Product" />
          </div>
          <div className="product-details">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
            <button className="add-to-cart" onClick={addToCart}>Add To Cart</button>
            
            <AnimatePresence>
          {showAddToCartMessage && <p className="addedToCartMessage">
          
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          exit="exit" >
            <b>Added to cart</b></motion.div></p>}</AnimatePresence>
            
            <p></p>
            <button className='goToCart' onClick={() => navigate('/')}><img  style={{ width: `13px` }}src={backimg} alt='back'></img> Back to shopping</button>

          </div>
        </div>
      )}
    </div>
  );
}
