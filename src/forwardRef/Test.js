import { useRef } from 'react'
import Input from './Input';

const Test = () => {
    const inputRef = useRef('');

    const show = () => {
        console.log(inputRef.current.value)
    }
    return (
        <div>
            <Input ref={inputRef}>Click Me</Input>
            <button onClick={show}>Show</button>
        </div>
    )
}

export default Test
