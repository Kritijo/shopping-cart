import { CartContext } from "../../../contexts/CartContext";
import { useContext } from "react";
import Styles from "./Card.module.css";

const Card = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className={Styles.productCard}>
            <div>
                <img src={product.image} className={Styles.img} />
            </div>
            <h3 className={Styles.h3}>{product.title}</h3>
            <h3 className={Styles.h3}>${product.price}</h3>
            <p className={Styles.desc}>{product.description}</p>
            <div className={Styles.bttnInputDiv}>
                <button
                    className={Styles.button}
                    onClick={() => {
                        addToCart(product);
                    }}
                >
                    Add to Cart
                </button>
                <div className={Styles.inputDiv}>
                    <label htmlFor={`quantity-${product.id}`}>Qty:</label>
                    <input
                        type="number"
                        min={0}
                        id={`quantity-${product.id}`}
                        placeholder="1"
                        className={Styles.input}
                    ></input>
                </div>
            </div>
        </div>
    );
};

export default Card;
