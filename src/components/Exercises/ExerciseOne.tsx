import { useState } from 'react';

export default function Game() {
    const [games, setGame] = useState({
        id: 1,
        player: {
            name: "Honore",
            age: 28
        }
    })

    const handleClick = () => {
        setGame({...games, player: {
            ...games.player,
            age: 39

        }})
    }


    return (
        <>
            {games["player"]["age"]}
            <button onClick={handleClick}>Button</button>
        </>
    )
}