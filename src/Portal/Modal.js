import ReactDOM from 'react-dom'

const Modal = ({ children }) => {
    return ReactDOM.createPortal(children,
        document.getElementById('root-portal'))
}

export default Modal
