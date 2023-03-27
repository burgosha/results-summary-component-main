import React from "react";
function FinalScore(props) {
    return(
        <div className="result-score-container">
            <p className="result-score">
                {Math.round(props.reduce((acc, curr) => acc + curr, 0))}
            </p>
            <p className="of-100">
                of 100
            </p>
        </div>
    );
}