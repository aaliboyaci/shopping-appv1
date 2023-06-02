import React from 'react'
import { CartContext } from '../App';
import { ProductContext } from '../App';
import { useContext } from 'react';
import "./Style.css"

export default function UserPage() {
  const { isLogin, user, setUser, setIsLogin } = useContext(CartContext);
  const { setPage } = useContext(ProductContext);

  return (
    <div class="user-page">
      {isLogin === 1 ? (
        <div class="user-details">
          <h2>User Information</h2>
          <div class="user-info">
            <p>
              <strong>ID:</strong> {user.id}
            </p>
            <p>
              <strong>Email:</strong>
              {user.email}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Name:</strong> {user.name.firstname},{user.name.lastname}
            </p>
            <p>
              <strong>City:</strong> {user.address.city}
            </p>
            <p>
              <strong>Zipcode:</strong> {user.address.zipcode}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <br />
            <button className="goToCart" onClick={() => setPage(0)}>
              Back to shopping
            </button>
            <br />
            <br />
            <button
              className="clearCart"
              onClick={() => {
                setUser([]);
                setIsLogin(0);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <button className="goToCart" onClick={() => setPage(1)}>
          Please Login first
        </button>
      )}
    </div>
  );
}


