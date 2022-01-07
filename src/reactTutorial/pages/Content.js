import React, { useState } from 'react'
import Portal from './Portal';

const Content = ({ page }) => {

    const [showPortal, setShowPortal] = useState(false);

    let data;
    if (page == 1) {
        data = <>
            <h1>React JS Introduction</h1>
            <p>React is a Javascript library used for building user Interfaces</p>
        </>
    }
    if (page == 13) {
        data = <> <button onClick={() => setShowPortal(true)}> Open Portal</button>
            {showPortal && <Portal close={() => setShowPortal(false)} />}
        </>
    }
    console.log(page);
    return (
        <div className='content'>
            {data}


        </div>
    )
}

export default Content
