import React, {useState} from "react";
//import {errIfNot200ish, decodeJSONOrDie, getRandomInt} from "../utils";
import Profile from '../Profile/Profile.jsx';
import "./GameBoard.css";

  

function GameBoard(props) {
   
    React.useEffect(() => {
        //function addGhosts() {
            const ghostContainer = document.querySelector('.game-board');

            for (let i = 0; i < 10; i++) {
                const element = document.createElement('div')
                element.style.top=`${Math.random()*100}%`
                element.style.left=`${Math.random()*100}%`
                element.style.animation = `twinkle ${1+Math.random()*20}s ease infinite`
                ghostContainer.appendChild(element)
                element.setAttribute('class', 'ghost')
            }
      //  }
    }, []);
    return (
        <div className="game-board">
            
        </div>
    );

}

export default GameBoard;