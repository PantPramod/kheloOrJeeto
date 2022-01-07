import React, { useEffect, useState } from 'react'
import data from './data';
import './Content.css';
import Message from './Message';
import question from '../assets/music/question.mp3'
import optionlock from '../assets/music/optionlock.mp3';
const Content = () => {
    const [selectedOpt, setSelectedOpt] = useState('');
    const [amount, setAmount] = useState(10000);
    const [selectedOptNo, setSelectedOptNo] = useState(0);
    const [selectedOptcolor, setSelectedOptColor] = useState('blue');
    const [correctOpt, setCorrectOpt] = useState(0);
    const [queNo, setQueNo] = useState(0);
    const [showMessage, setShowMessage] = useState(false);
    const [replayMusic, setReplayMusic] = useState(false);

    useEffect(() => {
        const question = document.getElementById('question');
        setTimeout(() => {

            question.play();
        }, 5500)
        return () => {

        }
    }, [replayMusic])
    const restart = () => {
        setShowMessage(false);
        setQueNo(0);
        setAmount(10000);
        const question = document.getElementById('question');
        question.play();
    }
    const checkAnswer = (selected, correct, no) => {
        const optionlocked = document.getElementById('optionlocked');
        optionlocked.play();

        setSelectedOpt(selected)
        setSelectedOptNo(no);
        setCorrectOpt(correct);
        setSelectedOptColor('blue');
        const timerId = setTimeout(() => {
            setCorrectOpt(correct)


            if (selected == correct) {
                console.log("correct answer you won ____amount");
                setSelectedOptColor('green')

                setAmount(amount * 2);

            }
            else {
                console.log("You selected wrong answer....");
                console.log("thankyou");
                setSelectedOptColor('red');

            }


        }, 5000)
        const timerid2 = setTimeout(() => {
            setShowMessage(true);
            setSelectedOptNo(0);
            setSelectedOptColor(null);

        }, 7000)

    }
    const close = () => {
        setShowMessage(false);
        const question = document.getElementById('question');
        question.play();
        setQueNo(queNo + 1);
    }
    return (<div className='content'>
        <h3 className='que'> {data[queNo].que}</h3>
        <div className='answers'>
            <div className='answer'><p style={selectedOptNo == 1 ? { border: `1px solid ${selectedOptcolor}`, background: selectedOptcolor } : {}} onClick={() => checkAnswer(data[queNo].opt1, data[queNo].correct, 1)}>{data[queNo].opt1}</p></div>
            <div className='answer'><p style={selectedOptNo == 2 ? { border: `1px solid ${selectedOptcolor}`, background: selectedOptcolor } : {}} onClick={() => checkAnswer(data[queNo].opt2, data[queNo].correct, 2)}>{data[queNo].opt2}</p></div>
            <div className='answer'><p style={selectedOptNo == 3 ? { border: `1px solid ${selectedOptcolor}`, background: selectedOptcolor } : {}} onClick={() => checkAnswer(data[queNo].opt3, data[queNo].correct, 3)}>{data[queNo].opt3}</p></div>
            <div className='answer'><p style={selectedOptNo == 4 ? { border: `1px solid ${selectedOptcolor}`, background: selectedOptcolor } : {}} onClick={() => checkAnswer(data[queNo].opt4, data[queNo].correct, 4)}>{data[queNo].opt4}</p></div>
        </div>
        <audio style={{ display: "none" }} controls id="question" autoplay>
            <source src={question} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        <audio style={{ display: "none" }} controls id="optionlocked" autoplay>
            <source src={optionlock} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
        {showMessage && <Message isWon={selectedOpt == correctOpt} amount={amount} close={close} restart={restart} />}
    </div>
    )
}

export default Content