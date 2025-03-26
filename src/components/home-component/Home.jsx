import Styles from "./Home.module.css";
import store from "../../assets/store.jpg";
import mobileImg from "../../assets/store-mobile.jpg";
import men from "../../assets/men.webp";
import gadgets from "../../assets/gadgets.webp";
import jewellery from "../../assets/jewellery.webp";
import women from "../../assets/women.webp";
import { Link } from "react-router-dom";

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
                        <li>
                            <div>
                                <img src={men} className={Styles.productImg} />
                            </div>
                            Men's Clothing
                        </li>
                        <li>
                            <div>
                                <img
                                    src={gadgets}
                                    className={Styles.productImg}
                                />
                            </div>
                            Electronics
                        </li>
                        <li>
                            <div>
                                <img
                                    src={jewellery}
                                    className={Styles.productImg}
                                />
                            </div>
                            Jewellery
                        </li>
                        <li>
                            <div>
                                <img
                                    src={women}
                                    className={Styles.productImg}
                                />
                            </div>
                            Women's Clothing
                        </li>
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
