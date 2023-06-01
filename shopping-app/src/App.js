import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductPage from './Components/ProductPage';
import UserPage from './Components/UserPage';
import CheckOut from './Components/CheckOut';
import Login from './Components/Login';
import Main from './Components/Main';




function App() {
  const [page, setPage] = useState(0);
  const [productNo, setProductNo] = useState();





  //sayfa kontrolü ve manuel routing
  const renderComponent = (value) => {
    switch (value) {
      case 0:
        return <Main setPage={setPage} setProductNo={setProductNo} productNo={productNo} />;
      case 1:
        return <Login />;
      case 2:
        return <UserPage />;
      case 3:
        return <ProductPage productNo={productNo} />;
      case 4:
        return <CheckOut />;
      default:
        return;
    }
  };


  return (
    <div className="Container">
      <Header setPage={setPage} />
      <br />
      {renderComponent(page)}
      <br />
      <Footer />
    </div>
  );
}


export default App;
