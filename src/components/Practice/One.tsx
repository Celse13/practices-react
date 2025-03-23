import { useState } from 'react'

const One = () => {
    const [drink, setDrink] =  useState({
        title: "Fanta", 
        price: 5,
        ingredients: {
            sugar: 38,
            salt: 3,
        }
    });

    const handleClick = () => {
        setDrink({...drink, price: 9, ingredients: {
            ...drink.ingredients,
            sugar: 89,
        },});
        console.log(drink);
    }
  return (
    <div>
        {drink.title}
        {drink.price}
        <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default One