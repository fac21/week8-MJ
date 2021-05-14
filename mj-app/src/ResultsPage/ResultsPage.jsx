import React from "react";
import "./ResultsPage.css";

function ResultsPage(props) {
    return (
        <div className="results">
            <p className="game-over">GAME OVER!</p>
            <p className="score-result">Score: { props.ScoreValue}</p>
        </div>
    );
}

export default ResultsPage;