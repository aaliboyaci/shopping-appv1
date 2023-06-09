import React from 'react';
import './App.css';
import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductPage from './Components/ProductPage';
import UserPage from './Components/UserPage';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Main from './Components/Main';
import { MainProvider } from './Context/MainProvider';
import Checkout from './Components/Checkout';

function App() {
  return (
    <div className="Container">
      <HashRouter>
        <MainProvider>
          <Header />
          <br />
          <div className='AppPage'>
            <Routes>
              <Route path='/shopping-appv1' element={<Main />} />
              <Route path='/shopping-appv1/login' element={<Login />} />
              <Route path='/shopping-appv1/user' element={<UserPage />} />
              <Route path='/shopping-appv1/product' element={<ProductPage />} />
              <Route path='/shopping-appv1/cart' element={<Cart />} />
              <Route path='/shopping-appv1/checkout' element={<Checkout />} />
            </Routes>
          </div>
        </MainProvider>
        <br />
        <Footer />
      </HashRouter>
      {console.clear()}
    </div>
  );
}

export default App;
