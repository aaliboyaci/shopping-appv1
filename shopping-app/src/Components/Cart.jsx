import React, { useContext } from 'react';
import { CartContext, ProductContext } from '../App';
import './Style.css';

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const { setPage } = useContext(ProductContext);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const removeFromCart = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    };

    return (
        <div>
            <h1>Cart</h1>
            {cart.length > 0 ? (<>
                <button className="clearCart" onClick={() => setCart([])}>Clear Cart</button>
                <br /> <br /></>
            ) : (
                <button className='goToCart' onClick={() => setPage(0)}>Back to shopping</button>
            )}
            <div>
                {cart.map((item) => (
                    <div className="cartItem" key={item.id}>
                        <img className="cartImage" src={item.image} alt={item.title} />
                        <p>{item.title}</p>
                        <div className="pricetag">
                            <h2>Price: ${item.price}</h2>
                            <p className="clearCart" onClick={() => removeFromCart(item.id)}><i>Remove item</i></p>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
        </div>
    );
}
