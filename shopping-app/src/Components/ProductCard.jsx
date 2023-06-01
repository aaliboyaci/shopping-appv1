import React, { useContext } from 'react';
import './Style.css';
import { ProductContext } from '../App';

export default function ProductCard(props) {
  const { product } = props;
  const { productNo, setProductNo, setPage} = useContext(ProductContext);

  const handleClick = () => {
    setProductNo(product.id);
    setPage(3);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt="product name" onClick={handleClick} />
      <div className="product-info">
        <p onClick={handleClick}>{product.title}</p>
        <h3 onClick={handleClick}>${product.price}</h3>
      </div>
      <button className="addCart">Add to cart</button>
    </div>
  );
}
