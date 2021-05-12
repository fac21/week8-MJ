import React, {useState} from "react";
import "./StartPageForm.css";

function StartPageForm(props) {

    return (
        <div className="start-page-form">
            {/* <form onSubmit={handleSubmit}> */}
            <form>
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