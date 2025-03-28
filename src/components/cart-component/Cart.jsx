import Styles from "./Cart.module.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./cartItems-component/CartItem";
import Checkout from "./checkout-component/Checkout";

const Cart = () => {
    const { cartMap } = useContext(CartContext);
    const cartArray = Array.from(cartMap.values());

    return (
        <section className={Styles.cart}>
            {cartMap.size === 0 ? (
                <h3>Your cart is empty!</h3>
            ) : (
                <>
                    <Checkout cart={cartArray} />
                    <h3 className={Styles.h3}>Your Cart Items:</h3>
                    <div className={Styles.cartItems}>
                        {cartArray.map(({ product, quantity }) => (
                            <CartItem
                                key={product.id}
                                product={product}
                                quantity={quantity}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default Cart;
