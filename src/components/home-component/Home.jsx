import Styles from "./Home.module.css";
import store from "../../assets/store.jpg";
import mobileImg from "../../assets/store-mobile.jpg";
import men from "../../assets/men.webp";
import gadgets from "../../assets/gadgets.webp";
import jewellery from "../../assets/jewellery.webp";
import women from "../../assets/women.webp";
import { Link } from "react-router-dom";

const CreateLi = ({ src, text }) => {
    return (
        <li>
            <Link to="/shop" className={Styles.a}>
                <div>
                    <img src={src} className={Styles.productImg} />
                </div>
                {text}
            </Link>
        </li>
    );
};

const HomePage = () => {
    return (
        <>
            <section>
                <picture>
                    <source srcSet={mobileImg} media="(max-width:768px)" />
                    <img
                        src={store}
                        className={Styles.img}
                        alt="Shopping illustration"
                    />
                </picture>
                <div className={Styles.textContainer}>
                    <h2>Welcome to our Shop!</h2>
                    <p className={Styles.text}>
                        Discover a wide range of stylish apparel and
                        accessories. Shop the latest trends and enjoy a seamless
                        shopping experience.
                    </p>
                    <ul className={Styles.categories}>
                        <CreateLi src={men} text="Men's Clothing" />
                        <CreateLi src={gadgets} text="Electronics" />
                        <CreateLi src={jewellery} text="Jewellery" />
                        <CreateLi src={women} text="Women's Clothing" />
                    </ul>
                    <Link to="/shop">
                        <button className={Styles.button}>
                            Start Shopping
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;
