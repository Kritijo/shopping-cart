import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar-component/NavBar";
import Styles from "./App.module.css";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <main className={Styles.main}>
                <Outlet />
            </main>
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
        </>
    );
}

export default App;
