import '../App.css'
import '../bootstrap.min.css'
import React, { useState } from "react";

function Text(props) {
    return (
        <div className={"poema text-white nunito text-right albumtext"}>
                    <p className={"mb-1"}>Não sou nada.</p>
                    <p className={"mb-1"}>Nunca serei nada.</p>
                    <p className={"mb-1"}>Não posso querer ser nada.</p>
                    <p className={"mb-3"}>À parte isso, tenho em mim todos os sonhos do mundo.</p>
                    <p className={"small"}>Tabacaria, Álvaro de Campos</p>
        </div>
    );
}

export default Text
