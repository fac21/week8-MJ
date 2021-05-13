import React from "react";
import "./Score.css";

function Score(props) {
    return (
        <div className="score">
            <span>
                Score: {props.score}
            </span>
        </div>
    );
}

export default Score;