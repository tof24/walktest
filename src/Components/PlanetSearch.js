import '../App.css'
import '../bootstrap.min.css'
import React, { useState } from "react";

function PlanetSearch(props) {
    return (
        <model-viewer
            src={props.image}
            alt="A rock"
            exposure="1"
            disable-tap
            auto-rotate
            camera-controls
            disable-zoom
            class={"mx-auto planetasearch " + props.class}
        >
        </model-viewer>

    );
}

export default PlanetSearch;

