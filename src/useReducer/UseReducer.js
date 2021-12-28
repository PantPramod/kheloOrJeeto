import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10,
}
const reducer = (state, action) => {
    switch (action.type) {
        case "incrementfirst":
            return { ...state, firstCounter: state.firstCounter + action.value }
        case "decrementfirst":
            return { ...state, firstCounter: state.firstCounter - action.value }
        case "incrementsecond":
            return { ...state, secondCounter: state.secondCounter + action.value }
        case "decrementsecond":
            return { ...state, secondCounter: state.secondCounter - action.value }
        case "reset":
            return initialState
        default:
            return state

    }

}
const UseReducer = () => {
    const [counter, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            {counter.firstCounter}||{counter.secondCounter}
            <button onClick={() => dispatch({ type: "incrementfirst", value: 1 })}>(1)Increment by 1</button>
            <button onClick={() => dispatch({ type: "decrementfirst", value: 1 })}>(1)decrement by 1</button>
            <button onClick={() => dispatch({ type: "reset" })}>(1)Reset</button>
            <button onClick={() => dispatch({ type: "incrementfirst", value: 10 })}>(1)Increment by 10</button>
            <button onClick={() => dispatch({ type: "decrementfirst", value: 10 })}>(1)decrement by 10</button>
            <button onClick={() => dispatch({ type: "incrementsecond", value: 10 })}>(2) Increment by 10</button>
            <button onClick={() => dispatch({ type: "decrementsecond", value: 10 })}>(2) decrement by 10</button>

        </div>
    )
}

export default UseReducer
