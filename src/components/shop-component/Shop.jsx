import { useState, useEffect } from "react";
import fetchProducts from "./fetchProducts";
import Card from "../card-component/Card";
import Styles from "./Shop.module.css";

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
        <section className={Styles.productsGrid}>
            {products.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </section>
    );
};

export default Shop;
