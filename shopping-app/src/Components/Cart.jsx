import React, { useContext } from 'react';
import { CartContext, ProductContext } from '../App';
import './Style.css';

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const { setPage } = useContext(ProductContext);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div>
            <h2>Cart</h2>
            {cart.length > 0 ? <button onClick={() => setCart([])}>Clear Cart</button> : <button onClick={() => setPage(0)}>Back to shopping</button>}
            <div>
                {cart.map((item) => (
                    <div className="cartItem" key={item.id}>
                        <img className="cartImage" src={item.image} alt={item.title} />

                        <p>{item.title}</p>
                        <h2>Price: ${item.price}</h2>

                    </div>
                ))}
            </div>
<br></br>
<h3>Total Price: ${totalPrice.toFixed(2)}</h3>

        </div>
    );
}
