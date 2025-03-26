async function fetchProducts(category) {
    const url =
        category && category != "all"
            ? `https://fakestoreapi.com/products/category/${category}`
            : `https://fakestoreapi.com/products`;

    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);

        const products = await res.json();
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}

export default fetchProducts;
