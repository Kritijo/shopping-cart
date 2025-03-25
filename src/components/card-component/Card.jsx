import styles from "./Card.module.css";

const Card = ({ product }) => {
    return (
        <div className={styles.productCard}>
            <div>
                <img src={product.image} className={styles.img}/>
            </div>
            <h3>{product.title}</h3>
            <h3>${product.price}</h3>
            <p className={styles.desc}>{product.description}</p>
            <button className={styles.button}>Add to cart</button>
        </div>
    );
};

export default Card;
