import React from "react";
import "./Score.css";

function Score(props) {
    return (
        <div className="score">
            <span>
                Score: {props.ScoreValue}
            </span>
        </div>
    );
}

export default Score;