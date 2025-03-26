import styles from "./Card.module.css";

const Card = ({ product }) => {
    return (
        <div className={styles.productCard}>
            <div>
                <img src={product.image} className={styles.img} />
            </div>
            <h3>{product.title}</h3>
            <h3>${product.price}</h3>
            <p className={styles.desc}>{product.description}</p>
            <div className={styles.bttnInputDiv}>
                <button className={styles.button}>Add to cart</button>
                <div className={styles.inputDiv}>
                    <label htmlFor={`quantity-${product.id}`}>Qty:</label>
                    <input
                        type="number"
                        min={0}
                        id={`quantity-${product.id}`}
                        placeholder="1"
                        className={styles.input}
                    ></input>
                </div>
            </div>
        </div>
    );
};

export default Card;
