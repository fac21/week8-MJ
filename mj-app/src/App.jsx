import React, { useState } from 'react'
import './App.css'
import StartPageForm from "./StartPageForm/StartPageForm";
import GameBoard from "./GameBoard/GameBoard";
import GithubUser from "./GithubUser/GithubUser";
import Score from "./Score/Score";
import ResultsPage from "./ResultsPage/ResultsPage";


function App() {
  const [gameState, setGameState] = useState("start");
  const [GithubName, setGithubName] = useState("");
  const [GithubImage, setGithubImage] = useState(""); // add default user icon here
  const [ScoreValue, setScore] = useState(0);
  console.log(ScoreValue);

  return (
    <div className="App">
      <header className="App-header">
        <h1>VSCode Live Scare</h1>
      </header>
      <main className="App_container">
        <div className="App_gameContainer">
          {gameState === "start" && (
            <StartPageForm setGithubName={setGithubName} GithubName={GithubName} setGithubImage={setGithubImage} setGameState={setGameState}/>
          )}
          {gameState === "game" && (
            <GameBoard setGameState={setGameState} ScoreValue={ScoreValue} setScore={setScore}/>
          )}
           {gameState === "results" && (
            <ResultsPage ScoreValue={ScoreValue}/>
          )}
        </div>
      </main>
      <footer>
        <div className="score">
          {gameState === "game" && (
            <Score ScoreValue={ScoreValue}/>
          )}
        </div>
        <div className="github-user">
          {gameState === "game" && (
            <GithubUser githubName={GithubName} githubImage={GithubImage}/>
          )}
        </div>
      </footer>
    </div>
  )
}



export default App;
