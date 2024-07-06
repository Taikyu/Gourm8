import { useContext } from "react";
import Button from "./UI/Button";
import Modal from "./UI/Modal";

import CartContext from "./store/CartContext";
import { currencyFormatter } from "./util/formatter";


export default function Cart () {
    const cartCtx = useContext(CartContext)
    const cartTotalPrice = cartCtx.items.reduce((total,item)=>{
        return total + (item.price * item.quantity)
    },0)
    

    return (
    <Modal className="cart">
        <h2>Your Cart</h2>
        <ul>
            {cartCtx.items.map((item)=>{
                return (
                    <li key={item.id}>{item.name} - x{item.quantity}</li>
                )
            })}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
        <p className="modal-actions">
            <Button textBtn>Close</Button>
            <Button>Add to Checkout</Button>
        </p>

    </Modal>
    );
}