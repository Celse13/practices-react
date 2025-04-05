import { useState } from "react";
import { produce } from "immer";

export default function Product() {
    const [cart, setCart] = useState({
        discount:  0.1,
        items: [
            {id: 1, title: "Product 1", quantity: 1},
            {id: 2, title: "Product 2", quantity: 2},

        ]
    });
    const handleClick = () => {
        setCart(produce(draft => {
            draft.items[0].quantity += 3;
        }))
    }

    return (
        <>
            {cart.items[0].quantity}
            <button onClick={handleClick}>Button</button>
        </>
    )
}