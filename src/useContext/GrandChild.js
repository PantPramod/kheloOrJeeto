import React, { useContext, useRef } from 'react'
import { colorTheme } from './Parent'
import { Userdata } from './Parent';

const GrandChild = () => {
    const nameRef = useRef('');
    const data = useContext(colorTheme);
    const { name, isLoggedIn, login, logout } = useContext(Userdata);

    return (
        <div>
            <p>Grand Child</p>
            {data}
            <input type="text" placeholder="Enter your name" ref={nameRef} />
            <h5>{name}</h5>
            <h2>{isLoggedIn ? "true" : "false"}</h2>
            <button onClick={() => login(nameRef.current.value)}>Login</button>
            <button onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default GrandChild
