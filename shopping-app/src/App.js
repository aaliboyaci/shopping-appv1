import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductPage from './Components/ProductPage';
import UserPage from './Components/UserPage';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Main from './Components/Main';

// createContext oluştur
export const ProductContext = React.createContext();
export const CartContext = React.createContext();

function App() {
  const [page, setPage] = useState(0);
  const [productNo, setProductNo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);



  return (
    <div className="Container">
      {/* ProductContext.Provider ile verileri paylaş */}
      <CartContext.Provider value={{ cart, setCart }}>
        <ProductContext.Provider value={{ productNo, setProductNo, setPage, isLoading, setIsLoading }}>
          <Header setPage={setPage} />
          <br />
          {page === 0 && <Main />}
          {page === 1 && <Login />}
          {page === 2 && <UserPage />}
          {page === 3 && <ProductPage />}
          {page === 4 && <Cart />}
        </ProductContext.Provider></CartContext.Provider>
      <br />
      <Footer />
    </div>
  );
}

export default App;
