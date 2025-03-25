import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar-component/NavBar";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default App;
