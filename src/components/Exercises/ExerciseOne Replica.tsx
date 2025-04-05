import { useState } from 'react';
import { produce } from 'immer';

export default function GameReplica() {
    const [games, setGame] = useState({
        id: 1,
        player: {
            name: "Honore",
            age: 28
        }
    })

    const handleClick = () => {
        setGame(produce(draft => {
            draft.player.age = 39
        }))

        // setGame({...games, player: {
        //     ...games.player,
        //     age: 39

        // }})
    }


    return (
        <>
            {games["player"]["age"]}
            <button onClick={handleClick}>Button</button>
        </>
    )
}