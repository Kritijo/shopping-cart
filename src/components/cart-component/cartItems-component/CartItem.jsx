import Styles from "./CartItem.module.css";
import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";

const CartItem = ({ product, quantity }) => {
    const { removeFromCart, updateQuantity } = useContext(CartContext);

    return (
        <div className={Styles.productCard}>
            <div>
                <img src={product.image} className={Styles.img} />
            </div>
            <div className={Styles.textContainer}>
                <h3 className={Styles.h3}>{product.title}</h3>
                <h3 className={Styles.h3}>${product.price}</h3>
                <select
                    id={`quantity-${product.id}`}
                    value={quantity}
                    onChange={(e) =>
                        updateQuantity(product.id, Number(e.target.value))
                    }
                    className={Styles.input}
                >
                    {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
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
