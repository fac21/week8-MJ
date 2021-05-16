import React, { useState } from "react";
import "./Ghost.css";

function Ghost(props) {

    const [deadState, setDeadState] = useState("alive");

    const ghost_top = `${Math.random() * 100}%`;
    const ghost_left =`${Math.random()*100}%`;
    const ghost_animation = `twinkle ${1+Math.random()*15}s ease infinite`;

    function killGhost(event) {
        if (!event.isTrusted) return;
            
        props.setScore((prevScore) => prevScore + 1); //updates score
        event.target.classList.add('hidden'); // hide ghost (TODO: delete ghost permanently)
        setDeadState("dead"); // kill ghost
    }
        

    return (
        <div className="ghost" onClick={killGhost} style={{ top: ghost_top, left: ghost_left, animation: ghost_animation }}></div>
    )
}

export default Ghost;