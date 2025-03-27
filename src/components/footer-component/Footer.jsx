import Styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <p>
                © {new Date().getFullYear()} VeryAwesomeShop. All rights
                reserved.
            </p>
            <p>Happy shopping! 🎉 Stay stylish & trendy with us.</p>
            <p>
                Need help?{" "}
                <a href="#" className={Styles.a}>
                    Contact Support
                </a>
            </p>
        </footer>
    );
};

export default Footer;
