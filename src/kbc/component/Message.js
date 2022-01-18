import ReactDOM from 'react-dom'
import './Message.css';

const Message = ({ isWon, amount, close, restart, length, queNo }) => {

    return ReactDOM.createPortal(
        <div className='message'>

            <div className="msg">
                <p className='success'>You Won {amount}.</p>
                {
                    (isWon && queNo < length) &&
                    <button onClick={() => close()}>Continue</button>
                }
            </div>
            {
                (isWon && queNo == length) && <div className='msg'>
                    <p className='success'>You Won {amount}.</p>
                    <p>Congratulation</p><br />
                    <button onClick={() => restart()}>Restart</button></div>
            }
            {!isWon && <div className="msg">
                <p className='fail'>Game Over</p>

                <button onClick={() => restart()}>Restart</button>
            </div>}
        </div>,
        document.getElementById('root-portal')
    )
}

export default Message
