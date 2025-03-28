import Styles from "./CartItem.module.css";

const CartItem = ({ product }) => {
    return (
        <div className={Styles.productCard}>
            <div>
                <img src={product.image} className={Styles.img} />
            </div>
            <div className={Styles.textContainer}>
                <h3 className={Styles.h3}>{product.title}</h3>
                <h3 className={Styles.h3}>${product.price}</h3>
                <p className={Styles.desc}>{product.description}</p>
                <div className={Styles.bttnInputDiv}>
                    <button className={Styles.button}>Remove from Cart</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
