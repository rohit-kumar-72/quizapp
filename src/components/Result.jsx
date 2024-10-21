import React from 'react';

const Result = ({ score, total }) => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold">Quiz Completed!</h2>
            <p className="text-xl mt-4">Your Score: {score} / {total}</p>
        </div>
    );
};

export default Result;
