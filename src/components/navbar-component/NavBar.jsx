import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import magnify from "../../assets/magnify.svg";

const NavBar = () => {
    return (
        <nav>
            <h1>Very Awesome Shop</h1>
            <form action="">
                <input placeholder="Search!"></input>
                <button type="submit" className={styles.button}>
                    <img src={magnify} alt="Search Icon" className={styles.img}/>
                </button>
            </form>
            <div className={styles.links}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    );
};

export default NavBar;
