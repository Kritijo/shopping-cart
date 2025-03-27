import Styles from "./CreateLi.module.css";
import { useContext } from "react";
import { CategoryContext } from "../../../contexts/CategoryContext";
import { Link } from "react-router-dom";

const CreateLi = ({ src, text, category }) => {
    const { setContextCategory } = useContext(CategoryContext);
    return (
        <li>
            <Link
                to="/shop"
                className={Styles.a}
                onClick={() => setContextCategory(category)}
            >
                <div>
                    <img src={src} className={Styles.productImg} />
                </div>
                {text}
            </Link>
        </li>
    );
};

export default CreateLi;
