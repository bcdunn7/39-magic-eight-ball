import { useState } from 'react';
import './EightBall.css'

const EightBall = ({answers}) => {
    const answerQuestion = (answers) => {
        const answerObj = answers[Math.floor(Math.random() * answers.length)];
        setText(answerObj['msg']);
        setColor(answerObj['color']);
    }

    // state
    const [text, setText] = useState("Think of a Question")
    const [color, setColor] = useState("black")

    // component JSX
    return (
        <>
            <div onClick={() => answerQuestion(answers)} className="EightBall" style={{backgroundColor: color}}>
                <div className="EightBall-question">{ text }</div>
            </div>
            <button onClick={() => answerQuestion([{msg: "Think of a question", color: "black"}])}>Reset</button>
        </>
    )
}

export default EightBall;