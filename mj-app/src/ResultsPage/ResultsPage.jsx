import React from "react";
import "./ResultsPage.css";

function ResultsPage(props) {
    function resetGame() {
        props.setGameState("game");
        props.setScore(0);
    }
    return (
        <div className="results">
            <p className="game-over">GAME OVER!</p>
            <p className="score-result">Score: { props.ScoreValue}</p>
            <button onClick={resetGame}>Play again</button>
        </div>
    );
}

export default ResultsPage;