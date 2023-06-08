import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductPage from './Components/ProductPage';
import UserPage from './Components/UserPage';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Main from './Components/Main';
import { MainProvider } from './Context/MainProvider';

function App() {
  return (
    <div className="Container">
      <Router>
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
            </Routes>
          </div>
        </MainProvider>
        <br />
        <Footer />
      </Router>
      {console.clear()}
    </div>
  );
}

export default App;
