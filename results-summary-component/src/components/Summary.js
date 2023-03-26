import React from "react";
import ReactionSvg from "../images/icon-reaction.svg";
function Summary() {
    return(
        <div className="main-container">
            <div className="result-container">
                <p>Your Result</p>
                <div>76 of 100</div>
                <p>Great</p>
                <p>Your performance exceed 65% of the people conducting the test here!</p>
            </div>
            <div className="summary-container">
                <p className="summary-title">Summary</p>
                {/* Score */}
                <div className="score-tag reaction-tag">
                    <span className="reaction-text">
                        <img className="reaction-icon" src={ReactionSvg} alt="reaction-icon" />
                        Reaction
                    </span>
                    <span className="reaction-score">
                        <span className="reaction-score-num">80</span> / 100
                    </span>
                </div>
                {/* Score */}
                <div className="score-tag reaction-tag">
                    <span className="reaction-text">
                        <img className="reaction-icon" src={ReactionSvg} alt="reaction-icon" />
                        Reaction
                    </span>
                    <span className="reaction-score">
                        <span className="reaction-score-num">80</span> / 100
                    </span>
                </div>
                {/* Score */}
                <div className="score-tag reaction-tag">
                    <span className="reaction-text">
                        <img className="reaction-icon" src={ReactionSvg} alt="reaction-icon" />
                        Reaction
                    </span>
                    <span className="reaction-score">
                        <span className="reaction-score-num">80</span> / 100
                    </span>
                </div>
                {/* Score */}
                <div className="score-tag reaction-tag">
                    <span className="reaction-text">
                        <img className="reaction-icon" src={ReactionSvg} alt="reaction-icon" />
                        Reaction
                    </span>
                    <span className="reaction-score">
                        <span className="reaction-score-num">80</span> / 100
                    </span>
                </div>
                {/* Continue Button */}
                <button className="continue-button">Continue</button>
            </div>
        </div>
    )
}
export default Summary;