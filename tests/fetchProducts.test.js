import { beforeEach, vi, describe, it, expect } from "vitest";
import fetchProducts from "../src/components/shop-component/fetchProducts";

globalThis.fetch = vi.fn(() =>
    Promise.resolve({
        json: () =>
            Promise.resolve([
                { id: 1, title: "Product 1", price: 10 },
                { id: 2, title: "Product 2", price: 20 },
            ]),
    })
);

describe("fetchProducts", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should fetch and return product data", async () => {
        const products = await fetchProducts();

        expect(products).toBeDefined();
        expect(products).toHaveLength(2);
        expect(products[0]).toEqual({ id: 1, title: "Product 1", price: 10 });

        expect(globalThis.fetch).toHaveBeenCalledTimes(1);
        expect(globalThis.fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products");
    });
});
