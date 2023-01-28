import '../App.css'
import '../bootstrap.min.css'
import React from "react";


function Text(props) {

    let textArray = props.text.split("||");
    let poema=[];
    let j=0;

    //console.log(textArray,"braa");
    for (let i=0; i<textArray.length; i++){
        if(i !== textArray.length-1) {
            poema[i] = <p className={"mb-0"} key={"id" + j++}> {textArray[i]}</p>
        } else {
            poema[i] = <p className={"mb-3"} key={"id" + j++}> {textArray[i]}</p>;
        }
    }

    return (
        <div className={"text-white nunito"}>
            {poema}
            <p className={"small"}>{props.source}</p>
        </div>
    );
}

export default Text;
