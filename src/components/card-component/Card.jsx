import Styles from "./Card.module.css";

const Card = ({ product }) => {
    return (
        <div className={Styles.productCard}>
            <div>
                <img src={product.image} className={Styles.img} />
            </div>
            <h3 className={Styles.h3}>{product.title}</h3>
            <h3 className={Styles.h3}>${product.price}</h3>
            <p className={Styles.desc}>{product.description}</p>
            <div className={Styles.bttnInputDiv}>
                <button className={Styles.button}>Add to cart</button>
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
