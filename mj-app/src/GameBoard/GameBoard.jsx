import React, {useState} from "react";
import "./GameBoard.css";
import Ghost from "../Ghost/Ghost.jsx";

function GameBoard(props) {
    
    const NUM_OF_GHOSTS = 10;
    if (props.ScoreValue == NUM_OF_GHOSTS) {
        props.setGameState("results"); // end game if all ghosts are killed    
    }
   
    const ghosts = Array.from({ length: NUM_OF_GHOSTS }, (ghost, index) => <Ghost key={index} setScore={props.setScore} ScoreValue={props.ScoreValue}/>);

    return (
        <div className="game-board">
            {ghosts}
        </div>
    );
}

export default GameBoard;