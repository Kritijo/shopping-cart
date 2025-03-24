import App from "./App";
import Shop from "./components/shop-component/Shop";
import Cart from "./components/cart-component/Cart";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/shop",
        element: <Shop />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
];

export default routes;
