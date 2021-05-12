import React, { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import StartPageForm from "./StartPageForm/StartPageForm";

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
            <StartPageForm/>
          )}
        </div>
      </div>
    </div>
  )
}



export default App;
