import Answer from "./Answer";
import { TestContext } from "../context/Test";
import React, {useContext} from 'react'

const Question = () => {
  const [testState, dispatch] = useContext(TestContext);
  console.log('Question', testState);
  const currentQuestion = testState.questions[testState.currentQuestionIndex];
  return (
    <div>
        <div className="question">{currentQuestion.question}</div>
        <div className="answers">
          {testState.answers.map((answer, index) => (
            // сверху желательно поменять на ID
            <Answer
             key={index}
             index={index}
             answerText={answer}
             correctAnswer={currentQuestion.correctAnswer}
             currentAnswer={testState.currentAnswer}
            onSelectAnswer={(answerText) => dispatch({type:
            'SELECT_ANSWER', payload: answerText})
          } 
          />
          ))}
        </div>
    </div>
  );
};

export default Question;