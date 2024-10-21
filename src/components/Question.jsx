import React from 'react';
import Options from './Options';

const Question = ({ question, options, handleAnswer, selectedOption, isCorrect }) => {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">{question}</h2>
            <Options
                options={options}
                handleAnswer={handleAnswer}
                selectedOption={selectedOption}
                isCorrect={isCorrect}
            />
        </div>
    );
};

export default Question;
