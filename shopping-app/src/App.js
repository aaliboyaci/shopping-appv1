import React from 'react';
import './App.css';
import { BrowserRouter as HashRouter, Routes, Route, HashRouter } from 'react-router-dom';
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
              <Route path='/' element={<Main />} />
              <Route path='/login' element={<Login />} />
              <Route path='/user' element={<UserPage />} />
              <Route path='/product' element={<ProductPage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
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
