import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar-component/NavBar";
import Footer from "./components/footer-component/Footer";
import Styles from "./App.module.css";
import ScrollToTop from "./components/ScrollToTop";
import { CategoryProvider } from "./contexts/CategoryContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";

function App() {
    return (
        <>
            <ScrollToTop />
            <CartProvider>
            <NavBar />
                <CategoryProvider>
                    <main className={Styles.main}>
                        <Outlet />
                    </main>
                </CategoryProvider>
            </CartProvider>
            <Footer />
        </>
    );
}

export default App;
