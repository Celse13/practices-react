import { produce } from "immer";

import { useState } from 'react'

const Four = () => {
    const [bugs, setBugs ] = useState([
        {id: 1, title: 'Bug 1', fixed: false},
        {id: 2, title: 'Bug 2', fixed: false},
    ]);
    const handleClick = () => {
        setBugs(produce((draft) => {
            const bug = draft.find((bug) => bug.id === 1);
            if (bug) bug.fixed = true;
        }));
    };
  return (  
    <div>
        {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New'}</p> )}
        <button onClick={handleClick}>Click here</button>

    </div>
  )
}

export default Four