import React, { useReducer } from 'react'
import Question from "./Question"

const initialState = {
  questions: [],
  currentQuestionIndex: 0,
};

const reducer = (state, action) => {
  console.log("reducer", state, action);
  if (action.type === "NEXT_QUESTION"){
    return{
      ...state,
      currentQuestionIndex: state.currentQuestionIndex + 1,
    };
  }
  return state;
};

const Test = () => {
  // const [currentQuestionIndex, setCurrenQuestionIndex] = useState(0);
  // console.log("result", currentQuestionIndex);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state);

  return (
    <div className='quiz'>
      {/* {currentQuestionIndex} */}
      <div>
      <div className='score'>Question 1/8</div>
      <Question />
      {/* <div className='next-button' onClick={() => setCurrenQuestionIndex(currentQuestionIndex + 1)}>Next question</div> */}
      <div className='next-button' onClick={() => dispatch({ type: "NEXT_QUESTION"})}>Далее</div>
      </div>
    </div>
  );
};

export default Test;
