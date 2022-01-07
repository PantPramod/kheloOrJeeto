import React, { useEffect, useState } from 'react'

import Cover from './component/Cover';
import Header from './component/Header';
import GlobalContext from './context/GlobalContext';
import Content from './component/Content.js'
import './MyApp.css';

const MyApp = () => {
    const [showCover, setShowCover] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => { setShowCover(false) }, 5500)
        return () => {
            clearTimeout(timer);
        }
    }, [])
    return (<GlobalContext>
        <div style={{ background: "rgb(32, 30, 30)" }}>
            {showCover && <Cover />}
            <Header />
            <Content />
        </div>
    </GlobalContext>)
}

export default MyApp
