import React from 'react'
import { CartContext } from '../App';
import { ProductContext } from '../App';
import { useContext } from 'react';

export default function UserPage() {
  const { isLogin,user } = useContext(CartContext);
  const { setPage } = useContext(ProductContext);
  return (
    <>
      <div class="user-page">{isLogin ?
        <div class="user-details">
          <h2>User Information</h2>
          <div class="user-info">
            <p><strong>ID:</strong> 1</p>
            <p><strong>Email:</strong> John@gmail.com</p>
            <p><strong>Username:</strong> johnd</p>
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Address:</strong> 7835 new road, kilcoole, 12926-3874</p>
            <p><strong>Phone:</strong> 1-570-236-7033</p>
          </div></div> : <button onClick={() => (setPage(1))}>Please Login first</button>}


      </div></>

  )
}
