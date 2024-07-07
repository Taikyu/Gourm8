import { useContext } from "react";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

import CartContext from "./store/CartContext";
import UserStoryContext from "./store/UserStoryContext";
import { currencyFormatter } from "./util/formatter";


export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userStory = useContext(UserStoryContext);
    const cartTotalPrice = cartCtx.items.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0);

    function handleCloseCart() {
        userStory.hideModal()
    };

    function handleShowCheckout() {
        userStory.showCheckout()
    };


    return (
        <Modal className="cart" open={userStory.progress === 'CART'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => {
                    function handleIncrease() {
                        cartCtx.addItem(item)
                    }
                    function handleDecrease() {
                        cartCtx.removeItem(item.id)
                    }
                    return (
                        <CartItem key={item.id} item={item} onDecrease={handleDecrease} onIncrease={handleIncrease} />
                    )
                })}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
            <p className="modal-actions">
                <Button textBtn onClick={handleCloseCart}>Close</Button>
                <Button onClick={handleShowCheckout} >Add to Checkout</Button>
            </p>

        </Modal>
    )
};


function CartItem({ item, onIncrease, onDecrease }) {
    return (
        <li className="cart-item">
            <p>
                {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{item.quantity}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    )
}