import React, { useContext, useRef } from 'react'
import { userdata } from './GlobalContext';

const GrandChild = () => {
    const nameRef = useRef('');
    const { name, isLoggedIn, login, logout } = useContext(userdata);
    return (
        <div>
            <label htmlFor="name" />
            <input type="text" id="name" placeholder="Enter your name" ref={nameRef} />

            <button onClick={() => login(nameRef.current.value)}>LogIn</button>
            <button onClick={() => logout()}>LogOut</button>
            <hr />
            <h3>{name}</h3>
            <p>{isLoggedIn ? `You are logged in ${name}` : "You are logout"}</p>
        </div>
    )
}

export default GrandChild
