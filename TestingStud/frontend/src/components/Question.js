import Answer from "./Answer";

import React from 'react'

const Question = () => {
  return (
    <div>
        <div className="question">Вопроз</div>
        <div className="answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        </div>
    </div>
  );
};

export default Question;