import { useContext, useState } from 'react';
import React from 'react'
import { MainContext } from '../Context/MainProvider';
import './Style.css';
import { motion, AnimatePresence } from 'framer-motion';


export default function Checkout() {
    const { cart } = useContext(MainContext);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const [pay, setPay] = useState(false);

    const payButton = () => {
        setPay(true);
        setTimeout(() => {
            setPay(false);
        }, 2500);
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                ease: "linear",
                duration: 0.3,
                x: { duration: 0.2 }
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                ease: "linear",
                duration: 0.3,
                x: { duration: 0.2 }
            },
        },
    };


    return (
        <div><h1>Checkout</h1>
            <br></br>
            <h3>Your Cart Total is: ${totalPrice}</h3>
            <br></br>
            <button className="Pay" onClick={() => payButton(true)}> PAY </button>
            <br></br>
            <AnimatePresence>
                {pay && <div className="addedToCartMessage">
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit" >
                        THANK YOU BUT THIS STORE IS A <b>FAKE ONE</b>
                    </motion.div>
                </div>}
            </AnimatePresence>
        </div>
    )
}
