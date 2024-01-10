import {useState} from 'react';


function Question(prop) {
    let { question, answer } = prop;
    let [isAnswerVisible, setIsAnswerVisible] = useState(false);

    function toggleAnswer()  {
        setIsAnswerVisible(!isAnswerVisible);
    }

    return (
        <div>
            <div className="question" onClick={toggleAnswer}>{question}</div>
            
            {isAnswerVisible && <div className='answer'>{answer}</div>}

        </div>
    );
}


export default Question;
