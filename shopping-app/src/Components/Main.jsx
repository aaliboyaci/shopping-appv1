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
  const baseurl = "https://fakestoreapi.com/products/"
  const [category, setCategory] = useState("");


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(baseurl + category);
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
  }, [currentPage, setIsLoading, setProducts, category]);



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
        <><div className="Categories">
          <p onClick={() => setCategory("")}>All</p>
          <p onClick={() => setCategory("category/electronics")}>Electronics</p>
          <p onClick={() => setCategory("category/jewelery")}>jewelery</p>
          <p onClick={() => setCategory("category/men's%20clothing")}>men's clothing</p>
          <p onClick={() => setCategory("category/women's%20clothing")}>women's clothing</p>
        </div>
          <br></br>
          <div className="product-grid">
            {products && products.length > 0 && (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div></>
      )}
      <div className="pagination">
        {currentPage > 1 && (
          <button className="pagebutton" onClick={previousPage}>
            {"< Previous"}
          </button>
        )}
        <p>Page {currentPage}</p>
        {currentPage < totalPages && (
          <button className="pagebutton" onClick={nextPage}>
            {"Next >"}
          </button>
        )}
      </div>
      <br />
      <button className='goToCart' onClick={() => { navigate('/cart') }}>Go to Cart</button>
    </div>
  );
}
