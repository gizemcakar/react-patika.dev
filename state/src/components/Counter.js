import { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    const increase = () => {   
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={ () => setCount(count - 1) }>Decrease</button>
            <button onClick={increase}>Increase</button>
        </div>
    )
}

export default Counter