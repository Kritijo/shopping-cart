import { useState, useEffect } from "react";
import fetchProducts from "./fetchProducts";
import Card from "../card-component/Card";
import Styles from "./Shop.module.css";
import CategorySelector from "./category-component/CategorySelector";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState("all");

    useEffect(() => {
        const fetchData = async () => {
            const productArr = await fetchProducts(category);
            setProducts(productArr);
        };
        fetchData();
    }, [category]);

    return (
        <>
            <CategorySelector category={category} setCategory={setCategory} />
            <section className={Styles.productsGrid}>
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </section>
        </>
    );
};

export default Shop;
