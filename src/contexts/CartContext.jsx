import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({
    cartMap: new Map(),
    addToCart: () => {},
    removeFromCart: () => {},
    updateQuantity: () => {},
});

export const CartProvider = ({ children }) => {
    const [cartMap, setCartMap] = useState(new Map());

    const addToCart = (product, quantity = 1) => {
        setCartMap((prevMap) => {
            const newMap = new Map(prevMap);
            if (newMap.has(product.id)) {
                newMap.set(product.id, {
                    ...newMap.get(product.id),
                    quantity: newMap.get(product.id).quantity + quantity,
                });
            } else {
                newMap.set(product.id, { product, quantity });
            }
            return newMap;
        });
    };

    const removeFromCart = (id) => {
        setCartMap((prevMap) => {
            const newMap = new Map(prevMap);
            newMap.delete(id);
            return newMap;
        });
    };

    const updateQuantity = (id, quantity) => {
        setCartMap((prevMap) => {
            const newMap = new Map(prevMap);
            const currentItem = newMap.get(id);

            if (currentItem) {
                newMap.set(id, {
                    ...currentItem,
                    quantity: quantity,
                });
            }

            return newMap;
        });
    };

    return (
        <CartContext.Provider
            value={{
                cartMap,
                addToCart,
                removeFromCart,
                updateQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
