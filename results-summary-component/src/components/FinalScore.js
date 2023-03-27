import React from "react";
function FinalScore(props) {
    return(
        <div className="result-score-container">
            <p className="result-score">
                {Math.floor(props.data.reduce((acc, curr) => acc + curr.score, 0) / props.data.length)}
            </p>
            <p className="of-100">
                of 100
            </p>
        </div>
    );
}
export default FinalScore;