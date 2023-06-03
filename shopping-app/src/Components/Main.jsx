import React, { useState, useEffect, useContext } from 'react';
import './Style.css';
import ProductCard from './ProductCard';
import { ProductContext } from '../App';
import Loading from './Loading';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const {isLoading, setIsLoading, currentPage, setCurrentPage } = useContext(ProductContext);

  useEffect(() => {
    setIsLoading(true);
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const itemsPerPage = 9;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setProducts(data.slice(startIndex, endIndex));
      setIsLoading(false);
      setTotalPages(Math.ceil(data.length / itemsPerPage));
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
      <br />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <div className="pagination">
        {currentPage > 1 && (
          <button className="pagebutton" onClick={previousPage}>
            {"<"}
          </button>
        )}
        <p>Page {currentPage}</p>
        {currentPage < totalPages && (
          <button className="pagebutton" onClick={nextPage}>
            {">"}
          </button>
        )}
      </div>
    </div>
  );
}
