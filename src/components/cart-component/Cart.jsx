import { useState } from "react";
import Styles from "./Cart.module.css";

const Cart = () => {
    const [cart, setCart] = useState("");
    return (
        <section className={Styles.cart}>
            {cart.length === 0 && <h3>Your cart is empty!</h3>}
        </section>
    );
};

export default Cart;
