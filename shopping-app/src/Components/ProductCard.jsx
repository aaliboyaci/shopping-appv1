import React from 'react';
import './Style.css';
import "../App.css";

export default function ProductCard(props) {
  const { product, setPage } = props;


  const handleClick = () => { setPage(3); props.setProductNo(props.id) };

  return (
    <div className="product-card"  >
      <img src={product.image} alt="product name" onClick={handleClick} />
      <div className="product-info" >
        <p onClick={handleClick}>{product.title}</p>
        <h3 onClick={handleClick}>${product.price}</h3>
      </div>
      <button className="addCart">Add to cart</button>
    </div>
  );
}
