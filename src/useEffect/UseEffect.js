import React, { useEffect, useState } from 'react';
import './UseEffect.css';

const UseEffect = () => {


    // Runs at the first time when component mounted
    useEffect(() => {
        console.log("useEffectrunning.....")
        let timerId = setTimeout(() => { setShowLoader(false) }, 5000)

        return () => {
            clearTimeout(timerId)
        }
    }, [])

    useEffect(() => {
        let timerId = setInterval(() => { setDate(Date()); }, 1000)
        return () => {
            clearInterval(timerId);
        }
    }, [])



    const [date, setDate] = useState('');
    const [showLoader, setShowLoader] = useState(true);
    const [flag, setFlag] = useState(false);

    // runs when the flag changed
    useEffect(() => {
        console.log("basse on flag running.....")
    }, [flag])
    return (
        <div>
            {showLoader && <div className="loader"></div>}
            {!showLoader && date}

            <button onClick={() => setFlag(!flag)}> Change  Flag</button>
        </div>
    )
}

export default UseEffect
