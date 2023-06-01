import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductPage from './Components/ProductPage';
import UserPage from './Components/UserPage';
import CheckOut from './Components/CheckOut';
import Login from './Components/Login';
import Main from './Components/Main';

// createContext oluştur
export const ProductContext = React.createContext();

function App() {
  const [page, setPage] = useState(0);
  const [productNo, setProductNo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="Container">
      <Header setPage={setPage} />
      <br />
      {/* ProductContext.Provider ile verileri paylaş */}
      <ProductContext.Provider value={{ productNo, setProductNo, setPage, isLoading, setIsLoading }}>
        {page === 0 && <Main />}
        {page === 1 && <Login />}
        {page === 2 && <UserPage />}
        {page === 3 && <ProductPage />}
        {page === 4 && <CheckOut />}
      </ProductContext.Provider>
      <br />
      <Footer />
    </div>
  );
}

export default App;
