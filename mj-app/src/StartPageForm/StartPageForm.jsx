import React, {useState} from "react";
import Profile from '../Profile/Profile.jsx';
import "./StartPageForm.css";

function StartPageForm(props) {
    const [name, setName] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setName(event.target.githubName.value);
//###
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
                    value={props.githubName}
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