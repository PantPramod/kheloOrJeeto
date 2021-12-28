import React, { useContext } from 'react'
import GrandChild from './GrandChild';
import { MyContext } from './Parent'
import { colorTheme } from './Parent';


const Child = () => {
    const data = useContext(MyContext);
    const data2 = useContext(colorTheme);
    return (
        <div>
            Child Component
            <p>{data}</p>
            <h1>{data2}</h1>
            <GrandChild />
        </div>
    )
}

export default Child
