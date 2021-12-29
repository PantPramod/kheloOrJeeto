import React from 'react'

const Button = ({ Onclick, children }) => {
    console.log("button" + children + "......")
    return (
        <div>
            <button onClick={Onclick}>{children}</button>
        </div>
    )
}

export default React.memo(Button)