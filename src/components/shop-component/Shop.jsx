import { useState, useEffect, useContext } from "react";
import fetchProducts from "./fetchProducts";
import Card from "../card-component/Card";
import Styles from "./Shop.module.css";
import CategorySelector from "./category-component/CategorySelector";
import { CategoryContext } from "../../contexts/CategoryContext";

const useFetch = (category = "all") => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProducts(category)
            .then((res) => setProducts(res))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [category]);

    return { products, error, loading };
};

const Shop = () => {
    const [localCategory, setLocalCategory] = useState("all");
    const { contextCategory, setContextCategory } = useContext(CategoryContext);

    const activeCategory =
        contextCategory !== "all" ? contextCategory : localCategory;

    const { products, error, loading } = useFetch(activeCategory);

    useEffect(() => {
        setLocalCategory(contextCategory);
        setContextCategory("all");
    }, [contextCategory, setContextCategory]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <>
            <CategorySelector
                category={localCategory}
                setCategory={setLocalCategory}
            />
            <section className={Styles.productsGrid}>
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </section>
        </>
    );
};

export default Shop;
