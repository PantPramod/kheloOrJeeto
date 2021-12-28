import { useState, useRef } from 'react'

const UseCustom = (props) => {
    const inputRef = useRef();
    const sum = props[0] + props[1];

    const clearInput = () => {
        inputRef.current.value = "";
    }
    const setInput = (i) => {
        inputRef.current.value = i;
    }
    const print = (i) => {
        console.log(i);

    }
    return { sum, inputRef, clearInput, setInput, print }


}

export default UseCustom
