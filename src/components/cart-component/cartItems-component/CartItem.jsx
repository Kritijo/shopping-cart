import Styles from "./CartItem.module.css";
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";

const CartItem = ({ product }) => {
    const { removeFromCart } = useContext(CartContext);
    return (
        <div className={Styles.productCard}>
            <div>
                <img src={product.image} className={Styles.img} />
            </div>
            <div className={Styles.textContainer}>
                <h3 className={Styles.h3}>{product.title}</h3>
                <h3 className={Styles.h3}>${product.price}</h3>
                <div className={Styles.inputDiv}>
                    <label htmlFor={`quantity-${product.id}`}>Qty:</label>
                    <input
                        type="number"
                        min={1}
                        id={`quantity-${product.id}`}
                        placeholder="1"
                        className={Styles.input}
                    ></input>
                </div>
                <p className={Styles.desc}>{product.description}</p>
                <div className={Styles.bttnInputDiv}>
                    <button
                        className={Styles.button}
                        onClick={() => removeFromCart(product.id)}
                    >
                        Remove from Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
