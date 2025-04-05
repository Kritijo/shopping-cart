import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const NavBar = () => {
    const { cartMap } = useContext(CartContext);
    return (
        <nav>
            <h1>Very Awesome Shop</h1>
            <div className={Styles.links}>
                <Link to="/" className={Styles.a}>
                    Home
                </Link>
                <Link to="/shop" className={Styles.a}>
                    Shop
                </Link>
                <Link to="/cart" className={Styles.a}>
                    Cart{" "}
                    <span className={Styles.cartLength}>{cartMap.size}</span>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
