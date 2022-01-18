import React, { useState, useEffect } from 'react'
import MyApp from './kbc/MyApp'
import './App.css';


const App = () => {
    const [datas, setDatas] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://kheloorjeetobackend.herokuapp.com/question", requestOptions)
            .then(response => response.json())
            .then(result => {
                setDatas(result)
                setIsloading(false)
            })
            .catch(error => console.log('error', error));

    }, [])

    const [goMyApp, setGoMyApp] = useState(false);
    return (
        <div className='app'>

            {!isLoading && !goMyApp && <button className='start' onClick={() => setGoMyApp(true)}>start</button>}
            {goMyApp && <MyApp data={datas} />
            }

        </div>
    )
}

export default App
