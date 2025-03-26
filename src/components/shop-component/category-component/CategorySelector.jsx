import Styles from "./Category.module.css";

const CategorySelector = ({ category, setCategory }) => {
    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    return (
        <select
            value={category}
            onChange={handleChange}
            className={Styles.selector}
        >
            <option value="all">All</option>
            <option value="jewelery">Jewellery</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
        </select>
    );
};

export default CategorySelector;
