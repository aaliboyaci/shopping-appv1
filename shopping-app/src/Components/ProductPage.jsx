import React from 'react'
import './Style.css';
import { useState, useEffect } from 'react';
export default function ProductPage(props) {

  const [product, setProduct] = useState([]);
  const apibase = "https://fakestoreapi.com/products"
 

  console.log(product);


  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${apibase}/${props.productNo}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Veri çekme hatası:', error);
    }
  };


//DATAYI ÇEKEBİLDİN ŞİMDİ EKRANA GÖSTERECEKSİN SAAT 16.23
  console.log(props.productNo);

    return (
        <div>
        
            
            <div className="product-page">
  <div className="product-image">
    <img src="product-image.jpg" alt="Product" />
  </div>
  <div className="product-details">
    <h2>Ürün Adı</h2>
    <p>Açıklama</p>
    <h3>Fiyat</h3>
    <button className="add-to-cart">Sepete Ekle</button>
  </div>
</div>

          
           

        </div>
    )
}
