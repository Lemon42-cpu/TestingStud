import React, { useContext } from 'react'
import { TestContext } from '../context/Test';
import Question from "./Question"




const Test = () => {
  // const [currentQuestionIndex, setCurrenQuestionIndex] = useState(0);
  // console.log("result", currentQuestionIndex);
  const [testState, dispatch] = useContext(TestContext);
  console.log('state', testState);

  return (
    <div className='quiz'>
      {testState.showResults && (
        <div className='results'>
          <div className='congratulations'>УРА!</div>
          <div className='reults-info'>
            <div>Вы прошли тест!</div>
            <div>Вы правильно ответили на {testState.correctAnswerCount} из {testState.questions.length}</div>
            <div className='next-button' onClick={() => dispatch({type: "RESTART"})}>Заново</div>
          </div>
          </div>
      )}
      {!testState.showResults && (
      <div>
      <div className='score'>
        {testState.currentQuestionIndex + 1}/
        {testState.questions.length}
        </div>
      <Question />
      {/* <div className='next-button' onClick={() => setCurrenQuestionIndex(currentQuestionIndex + 1)}>Next question</div> */}
      <div className='next-button'
       onClick={() => dispatch({ type: "NEXT_QUESTION"})}>Далее</div>
      </div>
      )}
    </div>
  );
};

export default Test;
