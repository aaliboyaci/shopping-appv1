import React, { useContext, useState, useEffect } from 'react';
import './Style.css';
import { ProductContext } from '../App';
import Loading from './Loading';

export default function ProductPage() {
  const { productNo, isLoading, setIsLoading } = useContext(ProductContext);
  const [product, setProduct] = useState(null);


  useEffect(() => {
    setIsLoading(true);
    fetchProduct();
  }, [productNo]);

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
            <button className="add-to-cart">Add To Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
