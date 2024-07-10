import { useContext } from "react";
import { currencyFormatter } from "./util/formatter";

import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button";
import CartContext from "./store/CartContext";
import UserStoryContext from "./store/UserStoryContext";

export default function CheckOut() {
    const cartCtx = useContext(CartContext)
    const userCtx = useContext(UserStoryContext)

    const cartTotalPrice = cartCtx.items.reduce((total, item) => {
        return total + (item.price * item.quantity)
    }, 0);

    function handleClose() {
        userCtx.showCart()
    }

    return (
        <Modal open={userCtx.progress === 'CHECKOUT'} onClose={handleClose}>
            <form action="">
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotalPrice)}</p>
                <Input label="Full Name" type="text" id="full-name" />
                <Input label="E-Mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div>
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />

                </div>

                <p className="">
                    <Button type="button" onClick={handleClose} textBtn>Close</Button>
                    <Button>Submit Order</Button>
                </p>
            </form>
        </Modal>
    )
}