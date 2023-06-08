import React from 'react'
import { useContext } from 'react';
import "./Style.css"
import { MainContext } from '../Context/MainProvider';
import { useNavigate } from 'react-router-dom';

export default function UserPage() {
  const { isLogin, user, setUser, setIsLogin } = useContext(MainContext);
  const navigate = useNavigate(); // useNavigate kancasını burada kullanın



  return (
    <div className="user-page">
      {isLogin === 1 ? (
        <div className="user-details">
          <h2>User Information</h2>
          <div className="user-info">
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
            <button className="goToCart" onClick={() => navigate('/')}>
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
        <button className="goToCart" onClick={() => navigate('/cart')}>
          Please Login first
        </button>
      )}
    </div>
  );
}


