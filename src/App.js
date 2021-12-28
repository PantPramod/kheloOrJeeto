import React from 'react'
import './App.css';
// import MapFunction from './map/MapFunction';
// import UseReducer from './useReducer/UseReducer';
// import Parent from './useContext/Parent';
// import UseEffect from './useEffect/UseEffect';
// import UseState from './useState/UseState';
// import App1 from './useContext/contextAPI/App1';
import UseCustom from './customHooks/UseCustom';

const App = () => {

    const { sum, inputRef, clearInput, setInput, print } = UseCustom([1, 2]);


    return (
        <div className='app'>
            {sum}
            <input type="text" ref={inputRef} />
            <button onClick={() => clearInput()}>Clear</button>
            <button onClick={() => print(inputRef.current.value)}>print</button>
        </div>
    )
}

export default App
