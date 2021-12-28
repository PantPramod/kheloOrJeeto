import React, { useState } from 'react'

const MapFunction = () => {

    const [data, setData] = useState(localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [])

    const save = () => {
        const newdata = [...data]
        newdata.push(Math.floor(Math.random() * 10) + 1);
        setData((prev) => newdata)
        localStorage.setItem("data", (JSON.stringify(data)));
    }
    return (
        <div>
            {data.map((item) => (<div>{item}</div>))}

            <button onClick={save}>Save</button>
            <button onClick={() => localStorage.removeItem("data")}>Clear</button>
        </div >
    )
}

export default MapFunction
