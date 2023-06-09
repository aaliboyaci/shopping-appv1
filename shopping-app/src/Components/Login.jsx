import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import './Style.css';
import { MainContext } from '../Context/MainProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { setUser, user, isLogin, setIsLogin } = useContext(MainContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate kancasını burada kullanın

  useEffect(() => {
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

    fetchUser();
  }, [setUser]);

  

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const loginUser = user.find((u) => u.username === username && u.password === password);

    if (loginUser) {
      setIsLogin(1);
      setUser(loginUser);
      navigate('/shopping-appv1'); // Doğru şekilde navigate kancasını kullanın
    } else {
      setIsLogin(2);
      console.clear();
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
