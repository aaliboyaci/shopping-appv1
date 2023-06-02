import React, { useEffect, useState } from 'react'
import { CartContext, ProductContext } from '../App';
import { useContext } from 'react';
import "./Style.css"

export default function Login() {
  const { setUser, user, isLogin, setIsLogin } = useContext(CartContext);
  const { setPage } = useContext(ProductContext);

  useEffect(() => {
    fetchUser();
  }, []); // Boş dependency array ekleyerek fetchUser fonksiyonunun sadece bir kere çağrılmasını sağlayabilirsiniz

  const fetchUser = () => {
    fetch('https://fakestoreapi.com/users')
      .then((response) => response.json())
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // Kullanıcı girişlerini aldığım yer
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için

    // Kullanıcı adı ve şifre ile giriş işlemleri burada yapılabilir
    if (user.length > 0) {
      for (let i = 0; i < user.length; i++) {
        if (username === user[i].username && password === user[i].password) {
          setIsLogin(1);
          setUser(user[i]);
          setPage(0);
          break;
        } else {
          setIsLogin(2);
          console.log("Doğrulama Başarısız");
        }
      }
    }

    setUsername("");
    setPassword("");
  };

 

  return (
    <>
      <h1>User Login</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input type="text" className="input" id="usernameinput" name="name" placeholder='Name' value={username} onChange={handleUsernameChange} />
        <br></br>
        <input type="password" className="input" id="passwordinput" name="password" placeholder='Password' value={password} onChange={handlePasswordChange} />
        <br></br>
        <button className='goToCart' type="submit">Login</button>
      </form>
      <br></br>
      {isLogin === 2 && <h2>Login Failed</h2>}
      {isLogin === 1 && <h2>Login Successful</h2>}
      {/* {console.log("userbilgsi")}
      {console.log(user)} */}

    </>
  )
}


// [3]
// : 
// address
// : 
// {geolocation: {…}, city: 'San Antonio', street: 'Hunters Creek Dr', number: 6454, zipcode: '98234-1734'}
// email
// : 
// "don@gmail.com"
// id
// : 
// 4
// name
// : 
// {firstname: 'don', lastname: 'romer'}
// password
// : 
// "ewedon"
// phone
// : 
// "1-765-789-6734"
// username
// : 
// "donero"
// __v
// : 
// 0