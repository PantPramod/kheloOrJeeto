import ReactDOM from 'react-dom'
import './Portal.css';
const Portal = ({ close }) => {
    return ReactDOM.createPortal(
        <div className='portal'>
            <div className='model1'>
                <button onClick={() => close()}>Ok</button>
            </div>
        </div>,
        document.getElementById('root-portal')
    )
}

export default Portal
