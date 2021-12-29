import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 20000000) i++
        return count % 2 === 0 ? "Even" : "Odd"
    }, [count])

    return (
        <div>
            {count}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            {isEven}<br />
            {count2}
            <button onClick={() => setCount2(count2 + 1)}>Increment</button>

        </div>
    )
}

export default UseMemo
