import React from 'react'

const Input = React.forwardRef((props, ref) => {
    return <input type="text" placeholder={props.children} ref={ref} />

})

export default Input;

