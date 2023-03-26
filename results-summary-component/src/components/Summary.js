import React from "react";
import "../stylesheets/Summary.css";
import ReactionSvg from "../images/icon-reaction.svg";
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
                    {/* Score */}
                    <div className="score-tag reaction-tag">
                        <span className="reaction-text score-text">
                            <img className="score-icon" src={ReactionSvg} alt="reaction-icon" />
                            Reaction
                        </span>
                        <span className="tag-score">
                            <span className="tag-score-num">80</span> <span className="over-100">/ 100</span>
                        </span>
                    </div>
                    {/* Score */}
                    <div className="score-tag reaction-tag">
                        <span className="reaction-text score-text">
                            <img className="score-icon" src={ReactionSvg} alt="reaction-icon" />
                            Reaction
                        </span>
                        <span className="tag-score">
                            <span className="tag-score-num">80</span> <span className="over-100">/ 100</span>
                        </span>
                    </div>
                    {/* Score */}
                    <div className="score-tag reaction-tag">
                        <span className="reaction-text score-text">
                            <img className="score-icon" src={ReactionSvg} alt="reaction-icon" />
                            Reaction
                        </span>
                        <span className="tag-score">
                            <span className="tag-score-num">80</span> <span className="over-100">/ 100</span>
                        </span>
                    </div>
                    {/* Score */}
                    <div className="score-tag reaction-tag">
                        <span className="reaction-text score-text">
                            <img className="score-icon" src={ReactionSvg} alt="reaction-icon" />
                            Reaction
                        </span>
                        <span className="tag-score">
                            <span className="tag-score-num">80</span> <span className="over-100">/ 100</span>
                        </span>
                    </div>    
                </div>
                {/* Continue Button */}
                <button className="continue-button">Continue</button>
            </div>
        </div>
    )
}
export default Summary;