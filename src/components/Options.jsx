import React from 'react';

const Options = ({ options, handleAnswer, selectedOption, isCorrect }) => {
    const getOptionStyle = (option) => {
        if (!selectedOption) return "bg-gray-200";
        if (option === selectedOption) {
            return isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white";
        }
        return "bg-gray-200";
    };

    return (
        <div className="grid grid-cols-2 gap-4">
            {options.map((option, index) => (
                <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    disabled={selectedOption !== null}
                    className={`p-4 rounded-md ${getOptionStyle(option)} ${selectedOption ? "" : "hover:bg-gray-300"}`}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default Options;
