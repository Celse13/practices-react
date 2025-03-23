import { useState } from 'react'

const Three = () => {
    const [bugs, setBugs] = useState([
        {id: 1, title: "bug 1", fixed: false},
        {id: 2, title: "bug 2", fixed: false}
    ]);

    const handleClick = () => {
        setBugs(bugs.map(bug => bug.id === 1 ? {
            ...bug,
            fixed: true
        } : bug))
    }
  return (
    <div>
        {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'New'}</p> )}
        <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default Three