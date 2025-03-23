import { useState } from 'react'

const Two = () => {
    const [colors, setColors] = useState(['blue', 'green', 'red']);
    const handleClick = () => {
        // add to array
        setColors([...colors, 'white']);

        // remove
        setColors(colors.filter(color => color !== 'red'));

        // updated
        setColors(colors.map(color => color === 'white' ? 'violet' : color));

    };
  return (
    <div>
        <button onClick={handleClick}></button>
    </div>
  )
}

export default Two