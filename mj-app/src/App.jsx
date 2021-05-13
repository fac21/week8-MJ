import React, { useState } from 'react'
import './App.css'
import StartPageForm from "./StartPageForm/StartPageForm";
import GameBoard from "./GameBoard/GameBoard";

function App() {
  // const [count, setCount] = useState(0)
  const [gameState, setGameState] = useState("start");
  const [GithubName, setGithubName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        {/* title and logo will go here */}
        <h1>Example Title</h1>
      </header>
      <div className="App_container">
        <div className="App_gameContainer">
          {gameState === "start" && (
            <StartPageForm setGithubName={setGithubName} GithubName={GithubName} setGameState={setGameState}/>
          )}
          {gameState === "game" && (
            <GameBoard />
          )}
        </div>
      </div>
    </div>
  )
}



export default App;
