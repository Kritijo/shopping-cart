import Styles from "./Checkout.module.css";

const Checkout = ({ cart }) => {
    const subtotal = cart.reduce(
        (sum, { product, quantity }) => sum + product.price * quantity,
        0
    );
    const tax = subtotal * 0.1;
    const shipping = subtotal > 50 ? 0 : 5;
    const total = subtotal + tax + shipping;

    return (
        <div className={Styles.checkout}>
            <div>Total Items: {cart.length}</div>
            <div>Subtotal: ${subtotal.toFixed(2)}</div>
            <div>Tax: ${tax.toFixed(2)}</div>
            <div>Shipping: ${shipping}</div>
            <hr />
            <div>Total: ${total.toFixed(2)}</div>
            <button
                onClick={() =>
                    alert(
                        "Checkout complete! Now just wait till the end of time."
                    )
                }
            >
                Checkout
            </button>
        </div>
    );
};

export default Checkout;
