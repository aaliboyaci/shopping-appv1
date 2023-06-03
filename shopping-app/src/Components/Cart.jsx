import React, { useContext } from 'react';
import { CartContext, ProductContext } from '../App';
import './Style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function Cart() {
    const { cart, setCart } = useContext(CartContext);
    const { setPage, setProductNo } = useContext(ProductContext);
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
            <TransitionGroup>
                {cart.map((item) => (<CSSTransition
                    key={item.id}
                    classNames="slide"
                    timeout={300}
                >
                    <div className="cartItem" key={item.id}>
                        <img className="cartImage" onClick={() => { setProductNo(item.id); setPage(3) }} src={item.image} alt={item.title} />
                        <p onClick={() => { setProductNo(item.id); setPage(3) }}>{item.title}</p>
                        <div className="pricetag">
                            <h2>Price: ${item.price}</h2>
                            <p className="clearCart" onClick={() => removeFromCart(item.id)}><i>Remove item</i></p>
                        </div>
                    </div>
                </CSSTransition>))}
                </TransitionGroup>
            </div>
            
            <br />
            {console.log(cart)}
            <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
        </div>

    );
}
