import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar-component/NavBar";
import Footer from "./components/footer-component/Footer";
import Styles from "./App.module.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
            <ScrollToTop />
            <NavBar />
            <main className={Styles.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;
