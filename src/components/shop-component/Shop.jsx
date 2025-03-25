import { useState, useEffect } from "react";
import fetchProducts from "./fetchProducts";
import Card from "../card-component/Card";
import styles from "./Shop.module.css";

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const productArr = await fetchProducts();
            setProducts(productArr);
        };
        fetchData();
    }, []);

    return (
        <section className={styles.productsGrid}>
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </section>
    );
};

export default Shop;
