import '../App.css'
import '../bootstrap.min.css'
import React from "react";


function Planet(props) {

    //altera apenas tamanho de saturno
    let custom;
    props.image === "./Saturn.glb" ? custom = "planetpos saturn" : custom = "planetpos";

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
                class={custom}
            ></model-viewer>
    );
}

export default Planet;

