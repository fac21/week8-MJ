import React from "react";
// import "./Score.css";

function ResultsPage(props) {
    return (
        <div className="results">
            GAME OVER!
            <span>Score: { props.ScoreValue}</span>
        </div>
    );
}

export default ResultsPage;