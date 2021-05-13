import React, { useState } from 'react'
import './App.css'
import StartPageForm from "./StartPageForm/StartPageForm";
import GameBoard from "./GameBoard/GameBoard";
import GithubUser from "./GithubUser/GithubUser";
import Score from "./Score/Score";


function App() {
  const [gameState, setGameState] = useState("start");
  const [GithubName, setGithubName] = useState("");
  const [GithubImage, setGithubImage] = useState(""); // add default user icon here
  const [Score, setScore] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ghost Game</h1>
      </header>
      <main className="App_container">
        <div className="App_gameContainer">
          {gameState === "start" && (
            <StartPageForm setGithubName={setGithubName} GithubName={GithubName} setGithubImage={setGithubImage} setGameState={setGameState}/>
          )}
          {gameState === "game" && (
            <GameBoard setGameState={setGameState} score={Score} setScore={setScore}/>
          )}
        </div>
      </main>
      <footer>
        <div class="score">
          {gameState === "game"}
        </div>
        <div class="github-user">
          {gameState === "game" && (
            <GithubUser githubName={GithubName} githubImage={GithubImage}/>
          )}
        </div>
      </footer>
    </div>
  )
}



export default App;
