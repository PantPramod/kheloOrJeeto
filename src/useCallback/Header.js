import React from 'react'

const Header = () => {
    console.log("Header.......");
    return (
        <div>
            <h1>useCallback hook</h1>
        </div>
    )
}

export default React.memo(Header)

