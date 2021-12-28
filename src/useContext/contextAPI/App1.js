import React from 'react'
import Parent from './Parent'
import './ContextAPI.css'
import GlobalContext from './GlobalContext'

const App1 = () => {
    return (
        <GlobalContext>
            <div className="contextapi">
                <h1 className='contextapi__header'>App Header</h1>
                <Parent />
            </div>
        </GlobalContext>

    )
}

export default App1
