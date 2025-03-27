import { useState, createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CategoryContext = createContext({
    contextCategory: "all",
    setContextCategory: () => {},
});

export const CategoryProvider = ({ children }) => {
    const [contextCategory, setContextCategory] = useState("all");

    return (
        <CategoryContext.Provider
            value={{ contextCategory, setContextCategory }}
        >
            {children}
        </CategoryContext.Provider>
    );
};
