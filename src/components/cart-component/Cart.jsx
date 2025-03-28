import Styles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./cartItems-component/CartItem";
import Checkout from "./checkout-component/Checkout";

const Cart = () => {
    const { cart } = useContext(CartContext);
    return (
        <section className={Styles.cart}>
            {cart.length === 0 ? (
                <h3>Your cart is empty!</h3>
            ) : (
                <>
                    <Checkout cart={cart} />
                    <h3 className={Styles.h3}>Your Cart Items:</h3>
                    <div className={Styles.cartItems}>
                        {cart.map((product) => (
                            <CartItem key={product.id} product={product} />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default Cart;
