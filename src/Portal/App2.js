import { useState } from 'react'
import Modal from './Modal'
import Portal from './Portal'

const App2 = () => {
    const [showPortal, setShowPortal] = useState(false)

    const closePortal = () => {
        setShowPortal(false);
    }
    const openPortal = () => {
        setShowPortal(true);
    }
    return (
        <div>
            <button onClick={openPortal}>Show Portal</button>


            {showPortal && <Modal>
                <Portal OnClose={closePortal} />
            </Modal>}
        </div>
    )
}

export default App2
