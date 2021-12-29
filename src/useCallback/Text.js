import React from 'react'

const Text = ({ value }) => {
    console.log("text .." + value)
    return (
        <div>
            <p>{value}</p>
        </div>
    )
}

export default React.memo(Text)
