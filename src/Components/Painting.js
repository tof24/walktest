import '../App.css'
import '../bootstrap.min.css'
import React from "react";


function Painting(props) {

    return (
        <div className={props.class}>
            <div className={"position-relative"}>
                <img className={"painting"} src={props.cover}/>
                <div className={"nunito text-white pt-2 d-none d-md-block albumtext"}>
                    <p className={"p-0 m-0"}>{props.name}</p>
                    <p className={"p-0 m-0 small"}>{props.artist}</p>
                </div>
            </div>
        </div>
    );
}

export default Painting
