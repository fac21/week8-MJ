import React, {useState} from "react";
import "./GameBoard.css";

function GameBoard(props) {
   
    React.useEffect(() => {
        const ghostContainer = document.querySelector('.game-board');
        const ghostArray = new Array(10);
        ghostArray.fill('ghost');
        console.log(ghostArray);
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

            if(!event.isTrusted) return;
        
            props.setScore(props.score +1)
            this.classList.add('hidden');
            //scoreBoard.textContent = score;
             if (props.score === ghostArray.length) { 
                 props.setGameState('results');
            }
        }
        
        ghosts.forEach(ghost => ghost.addEventListener('click', killGhost));
        
    }, []);
    return (
        <div className="game-board"></div>
    );
}

export default GameBoard;