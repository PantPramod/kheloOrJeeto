
import { useEffect } from 'react';
import ReactDOM from 'react-dom'
import './Cover.css';
import KBC from '../assets/music/KBC.mp3'
const Cover = () => {

    useEffect(() => {
        const myaudio = document.getElementById('myaudio');
        console.log(myaudio);
        myaudio.play();
    }, [])
    return ReactDOM.createPortal(
        <div className='cover'>
            <h2 className='kbc'>
                Khelo Aur Jeeto
            </h2>
            <div className='box'>
                <div className='box1'></div>
                <div className='box2'></div>
                <div className='box3'></div>
                <div className='box4'></div>

            </div>
            <audio style={{ display: "none" }} controls id="myaudio" autoplay>
                <source src={KBC} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            {/* <audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio> */}
        </div>,
        document.getElementById('root-portal')
    )
}

export default Cover
