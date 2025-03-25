import NavBar from "../navbar-component/NavBar";
import { useState, useEffect } from "react";
import fetchProducts from "./fetchProducts";
import Card from "../card-component/Card";

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
        <main>
            <NavBar />
            <section className="products-grid">
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </section>
        </main>
    );
};

export default Shop;
