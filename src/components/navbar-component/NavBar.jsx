import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import magnify from "../../assets/magnify.svg";

const NavBar = () => {
    return (
        <nav>
            <h1>Very Awesome Shop</h1>
            <form action="" className={styles.form}>
                <input placeholder="Search!" className={styles.input}></input>
                <button type="submit" className={styles.button}>
                    <img
                        src={magnify}
                        alt="Search Icon"
                        className={styles.img}
                    />
                </button>
            </form>
            <div className={styles.links}>
                <Link to="/" className={styles.a}>
                    Home
                </Link>
                <Link to="/shop" className={styles.a}>
                    Shop
                </Link>
                <Link to="/cart" className={styles.a}>
                    Cart
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
