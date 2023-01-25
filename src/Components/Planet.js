import '../App.css'
import '../bootstrap.min.css'
import React, { useState } from "react";

function Planet(props) {
    return (

            <model-viewer
                src={props.image}
                alt="A rock"
                exposure="1"
                disable-tap
                auto-rotate
                camera-controls
                touch-action="pan-y"
                disable-zoom
                class={"planetpos"}
            >
            </model-viewer>
    );
}

export default Planet

