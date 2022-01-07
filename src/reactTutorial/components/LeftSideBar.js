import React from 'react'
import './LeftSideBar.css';
const LeftSideBar = ({ Onclick }) => {
    return (
        <div className='leftsidebar'>
            <ul>
                <li onClick={() => Onclick(1)}>Introduction</li>
                <li onClick={() => Onclick(2)}>ClassComponent</li>
                <li onClick={() => Onclick(3)}>lifecycle methods</li>
                <li onClick={() => Onclick(4)}>functional Component</li>
                <li onClick={() => Onclick(5)}>State</li>
                <li onClick={() => Onclick(6)}>Props</li>
                <li onClick={() => Onclick(7)}>useState</li>
                <li onClick={() => Onclick(8)}>useEffect</li>
                <li onClick={() => Onclick(9)}>useReducer</li>
                <li onClick={() => Onclick(10)}>useContext</li>
                <li onClick={() => Onclick(11)}>useCallback</li>
                <li onClick={() => Onclick(12)}>useMemo</li>
                <li onClick={() => Onclick(13)}>portal</li>
                <li onClick={() => Onclick(14)}>fragment</li>
            </ul>
        </div>
    )
}

export default LeftSideBar
