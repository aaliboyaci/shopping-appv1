import React, { useContext, useState } from 'react';
import './Style.css';
import { CartContext, ProductContext } from '../App';

export default function ProductCard(props) {
  const { product } = props;
  const { setProductNo, setPage } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext);
  const [showAddToCartMessage, setShowAddToCartMessage] = useState(false);


  const handleClick = () => {
    setProductNo(product.id);
    setPage(3);
    
  };

  const addToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
    setShowAddToCartMessage(true);
    setTimeout(() => {
      setShowAddToCartMessage(false);
    }, 860);
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
      </button>
      {showAddToCartMessage && <p className="addedToCartMessage"><b>Added to cart</b></p>}

    </div>
  );
}
