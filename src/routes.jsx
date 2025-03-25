import App from "./App";
import Home from "./components/home-component/Home";
import Shop from "./components/shop-component/Shop";
import Cart from "./components/cart-component/Cart";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, path: "/", element: <Home /> },
            { path: "/shop", element: <Shop /> },
            { path: "/cart", element: <Cart /> },
        ],
    },
];

export default routes;
