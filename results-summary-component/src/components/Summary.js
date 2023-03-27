import React from "react";
import "../stylesheets/Summary.css";
import Score from "./Score.js";
import data from "../data/data.json";
function Summary() {
    return(
        <div className="main-container">
            <div className="result-container">
                <p className="result-title">Your Result</p>
                <div className="result-score-container"><p className="result-score">76</p><p className="of-100">of 100</p></div>
                <div className="result-notes">
                    <p className="result-note">Great</p>
                    <p className="result-description">Your performance exceed 65% of the people conducting the test here!</p>
                </div>
            </div>
            <div className="summary-container">
                <p className="summary-title">Summary</p>
                {/* Scores */}
                <div className="scores">
                    {data.map((data) => {
                        return <Score category={data.category} score={data.score} icon={data.icon} />;
                    })
                    }
                </div>
                {/* Continue Button */}
                <button className="continue-button">Continue</button>
            </div>
        </div>
    )
}
export default Summary;