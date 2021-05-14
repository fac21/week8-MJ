import React, {useState} from "react";
import "./GameBoard.css";

function GameBoard(props) {
   
    React.useEffect(() => {
        const ghostContainer = document.querySelector('.game-board');
        const ghostArray = new Array(10);
        ghostArray.fill('ghost');
        for (let i = 0; i < ghostArray.length; i++) {
            const element = document.createElement('div')
            element.style.top=`${Math.random()*100}%`
            element.style.left=`${Math.random()*100}%`
            element.style.animation = `twinkle ${1+Math.random()*15}s ease infinite`
            ghostContainer.appendChild(element)
            element.setAttribute('class', 'ghost')
        }
        const ghosts = document.querySelectorAll('.ghost');

        function killGhost(event){
            if (!event.isTrusted) return;
            
            props.setScore((prevScore) => prevScore + 1); //updates score
            event.target.classList.add('hidden'); // hide ghost (TODO: delete ghost permanently)
             
        }
        
        ghosts.forEach(ghost => ghost.addEventListener('click', (e) => {
            killGhost(e);
            console.log(props.ScoreValue, ghostArray.length)
            if (props.ScoreValue == ghostArray.length -1) {
                 props.setGameState("results"); // end game if all ghosts are killed
            }
        }));
        
    }, []);
    return (
        <div className="game-board"></div>
    );
}

export default GameBoard;