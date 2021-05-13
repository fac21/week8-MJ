import React from "react";
import "./GithubUser.css";

function GithubUser(props) {
    return (
        <div className="GithubUser">
            <img
                className="GithubUser__image"
                src={props.githubImage}
                alt="Game user"
            />
            <span className="GithubUser__username">{props.githubName}</span>
        </div>
    );
}

export default GithubUser;

    // if (!user) return <div>Loading...</div>;
    //     return (
    //       <div>
    //         <h1>{user.name}</h1>
    //         <img src={user.avatar_url} alt="" width="128" height="128" />
    //       </div>
    //     );