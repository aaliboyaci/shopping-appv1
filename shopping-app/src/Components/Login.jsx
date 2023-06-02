import React, { useEffect, useState } from 'react'
import { CartContext, ProductContext } from '../App';
import { useContext } from 'react';
import "./Style.css"

export default function Login() {
  const { setUser, user, isLogin, setIsLogin } = useContext(CartContext);
  const { setPage } = useContext(ProductContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    fetch('https://fakestoreapi.com/users')
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginUser = user.find(
      (u) => u.username === username && u.password === password
    );

    if (loginUser) {
      setIsLogin(1);
      setUser(loginUser);
      setPage(0);
    } else {
      setIsLogin(2);
      console.log('Doğrulama Başarısız');
    }

    setUsername('');
    setPassword('');
  };

  return (
    <>
      <h1>User Login</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          id="usernameinput"
          name="name"
          placeholder="Name"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <input
          type="password"
          className="input"
          id="passwordinput"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button className="goToCart" type="submit">
          Login
        </button>
      </form>
      <br />
      {isLogin === 2 && <h2>Login Failed</h2>}
      {isLogin === 1 && <h2>Login Successful</h2>}
    </>
  );
}
