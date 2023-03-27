import React from "react";
function Score(props) {
    return (
        <div className={`score-tag ${props.category.toLowerCase()}-tag`}>
        <span className={`${props.category.toLowerCase()}-text score-text`}>
            <img className="score-icon" src={props.icon} alt={`${props.category.toLowerCase()}-icon`}/>
            {props.category}
        </span>
        <span className="tag-score">
            <span className="tag-score-num">{props.score}</span> <span className="over-100">/ 100</span>
        </span>
    </div>
    )
}
export default Score;