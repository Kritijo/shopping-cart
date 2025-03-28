import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({
    cart: [],
    addToCart: () => {},
    removeFromCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [vis, setVis] = useState(new Set());

    const addToCart = (product) => {
        if (!vis.has(product.id)) {
            setCart((prevCart) => [...prevCart, product]);
            setVis((prevVis) => new Set(prevVis).add(product.id));
        }
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== id));
        setVis((prevVis) => {
            const newVis = new Set(prevVis);
            newVis.delete(id);
            return newVis;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
