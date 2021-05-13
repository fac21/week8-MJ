import React, {useState} from "react";
import "./StartPageForm.css";

function StartPageForm(props) {
    // const [name, setName] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const USER_URL = `https://api.github.com/users/${props.GithubName}`;

        // setName(event.target.githubName.value);
        props.setGameState("game");

        fetch(USER_URL)
            .then((result) => result.json())
            .then((data) => {
                props.setGithubImage(data.avatar_url)
             })
            .catch((err) => {
                console.error(err);
                // some user feedback needed here
            })
    }
    return (
        <div className="start-page-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="githubName">Enter your GitHub username:</label>
                <input
                    type="text"
                    id="githubName"
                    name="githubName"
                    placeholder="Type your username here"
                    onChange={(event) => {
                        props.setGithubName(event.target.value);
                    }}
                    value={props.GithubName}
                    required
                />

                {/* DIFFICULTY LEVELS = STRETCH GOAL */}

                {/* Div for future error message might go here */}

                <button id="startButton">Play</button>
            </form>
        </div>
    );

}

export default StartPageForm;