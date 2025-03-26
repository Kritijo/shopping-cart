import styles from "./Home.module.css";
import store from "../../assets/store.jpg";
import mobileImg from "../../assets/store-mobile.jpg";
import men from "../../assets/men.jpg";
import gadgets from "../../assets/gadgets.jpg";
import jewellery from "../../assets/jewellery.jpg";
import women from "../../assets/women.jpg";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <section>
                <picture>
                    <source srcSet={mobileImg} media="(max-width:768px)" />
                    <img
                        src={store}
                        className={styles.img}
                        alt="Shopping illustration"
                    />
                </picture>
                <div className={styles.textContainer}>
                    <h2>Welcome to our Shop!</h2>
                    <p className={styles.text}>
                        Discover a wide range of stylish apparel and
                        accessories. Shop the latest trends and enjoy a seamless
                        shopping experience.
                    </p>
                    <ul className={styles.categories}>
                        <li>
                            <div>
                                <img src={men} className={styles.productImg} />
                            </div>
                            Men's Clothing
                        </li>
                        <li>
                            <div>
                                <img
                                    src={gadgets}
                                    className={styles.productImg}
                                />
                            </div>
                            Electronics
                        </li>
                        <li>
                            <div>
                                <img
                                    src={jewellery}
                                    className={styles.productImg}
                                />
                            </div>
                            Jewellery
                        </li>
                        <li>
                            <div>
                                <img
                                    src={women}
                                    className={styles.productImg}
                                />
                            </div>
                            Women's Clothing
                        </li>
                    </ul>
                    <Link to="/shop">
                        <button className={styles.button}>
                            Start Shopping
                        </button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;
