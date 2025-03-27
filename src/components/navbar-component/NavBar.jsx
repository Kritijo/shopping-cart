import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css";
import magnify from "../../assets/magnify.svg";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

const NavBar = () => {
    const { cart } = useContext(CartContext);
    return (
        <nav>
            <h1>Very Awesome Shop</h1>
            <form action="" className={Styles.form}>
                <input placeholder="Search!" className={Styles.input}></input>
                <button type="submit" className={Styles.button}>
                    <img
                        src={magnify}
                        alt="Search Icon"
                        className={Styles.img}
                    />
                </button>
            </form>
            <div className={Styles.links}>
                <Link to="/" className={Styles.a}>
                    Home
                </Link>
                <Link to="/shop" className={Styles.a}>
                    Shop
                </Link>
                <Link to="/cart" className={Styles.a}>
                    Cart ({cart.length})
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
