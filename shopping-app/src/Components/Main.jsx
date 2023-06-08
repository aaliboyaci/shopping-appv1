import React, { useEffect, useContext, useState } from 'react';
import './Style.css';
import ProductCard from './ProductCard';
import { MainContext } from '../Context/MainProvider';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const mainContext = useContext(MainContext);
  const { products, setProducts, isLoading, setIsLoading, currentPage, setCurrentPage } = mainContext;
  const [totalPages, setTotalPages] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
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
    setIsLoading(true);
    fetchProducts();
  }, [currentPage, setIsLoading, setProducts]);



  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div>
      {console.log(products)}
      <br />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="product-grid">
          {products && products.length > 0 && (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
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
      <br />
      <button className='goToCart' onClick={() => { navigate('/cart') }}>Go to Cart</button>
    </div>
  );
}
