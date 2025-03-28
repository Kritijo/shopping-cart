import Styles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./cartItems-component/CartItem";

const Cart = () => {
    const { cart } = useContext(CartContext);
    return (
        <section className={Styles.cart}>
            {cart.length === 0 ? (
                <h3>Your cart is empty!</h3>
            ) : (
                cart.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))
            )}
        </section>
    );
};

export default Cart;
