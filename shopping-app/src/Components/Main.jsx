import React, { useState, useEffect } from 'react';
import './Style.css';
import ProductCard from './ProductCard';

export default function Main(props) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(products);


  useEffect(() => {
   fetchProducts();
  }, [currentPage, products]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const startIndex = (currentPage - 1) * 9;
      const endIndex = startIndex + 9;
      setProducts(data.slice(startIndex, endIndex));
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div>
      <div className="product-grid">
        {products.map((product) => (
         <> <ProductCard key={product.id} id={product.id} setPage={props.setPage} product={product} setProductNo={props.setProductNo}/>
          </>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && <button onClick={previousPage}>Previous Page</button>}
        <p>Page {currentPage}</p>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </div>
  );
}
