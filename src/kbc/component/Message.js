import ReactDOM from 'react-dom'
import './Message.css';

const Message = ({ isWon, amount, close, restart }) => {
    return ReactDOM.createPortal(
        <div className='message'>

            {isWon && <div class="msg">
                <p className='success'>You Won {amount}.</p>
                {
                    isWon && amount < 10240000 ?
                        <button onClick={() => close()}>Continue</button> :
                        <> <p>Congratulation</p><br />
                            <button onClick={() => restart()}>Restart</button></>}
            </div>}
            {!isWon && <div class="msg">
                <p className='fail'>Game Over</p>

                <button onClick={() => restart()}>Restart</button>
            </div>}
        </div>,
        document.getElementById('root-portal')
    )
}

export default Message
