import { useState } from "react";

export default function Food() {
    const [pizza, setPizza] = useState({
        name: "Spicy Pepperoni",
        toppings: ["Mushroom"]
    });

    const handleClick = () => {
        setPizza({...pizza, toppings: [ ...pizza.toppings, "Cheese" ]})
    };

    return (
        <>
            {pizza.toppings}
            <button onClick={handleClick}>Button</button>
        </>
    )
}