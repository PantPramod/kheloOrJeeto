import React, { useState } from 'react'
import MyApp from './kbc/MyApp'
// import './App.css';

const App = () => {
    const [goMyApp, setGoMyApp] = useState(false);
    return (
        <div className='app'>
            {!goMyApp && <button class='start' onClick={() => setGoMyApp(true)}>start</button>}
            {goMyApp && <MyApp />
            }

        </div>
    )
}

export default App
