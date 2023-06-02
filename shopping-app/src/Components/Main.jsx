import React, { useState, useEffect, useContext } from 'react';
import './Style.css';
import ProductCard from './ProductCard';
import { ProductContext } from '../App';
import Loading from './Loading';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { isLoading, setIsLoading } = useContext(ProductContext);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const startIndex = (currentPage - 1) * 9;
      const endIndex = startIndex + 9;
      setProducts(data.slice(startIndex, endIndex));
      setIsLoading(false);
      setTotalPages(Math.ceil(data.length / 9)); // Toplam sayfa sayısını hesapla
      window.scrollTo(0, 0);
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
      <div className="pagination">
        {currentPage > 1 && <button onClick={previousPage}> Previous </button>}
        <p> Page {currentPage} </p>
        {currentPage < totalPages && <button onClick={nextPage}> Next </button>}
      </div>
      <br></br>
      {isLoading ? <Loading /> :
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>}
      <div className="pagination">
        {currentPage > 1 && <button onClick={previousPage}> Previous </button>}
        <p> Page {currentPage} </p>
        {currentPage < totalPages && <button onClick={nextPage}> Next </button>}
      </div>
    </div>
  );
}

