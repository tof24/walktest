import '../App.css'
import '../bootstrap.min.css'
import React, { useState } from "react";

function TextU(props) {
    return (
        <div className={"poema text-white nunito text-right albumtext"}>
                    <p className={"mb-1"}>Não tenho ambições nem desejos.</p>
                    <p className={"mb-1"}>Ser poeta não é uma ambição minha.</p>
                    <p className={"mb-3"}>É a minha maneira de estar sozinho.</p>
                    <p className={"small"}>Livro do Desassossego, Fernando Pessoa</p>
        </div>
    );
}

export default TextU
