import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/album";
import Painting from "../Components/Painting";
import Text from "../Components/Text";
import { Link } from 'react-router-dom';


function Earth() {

    return (

        <div className={"container-fluid centra"}>

            <div className={" container-fluid w-100"}>

                <Link to="detail"><Album name={"Dark Side of The Moon"} artist={"Pink Floyd"} class={"dark"} cover={"./Earth/dark.jpg"}></Album></Link>
                <Album name={"Space Oddity"} artist={"David Bowie"} class={"oddity"} cover={"./Earth/oddity.jpg"}></Album>
                <Painting name={"Scuola di Atene"} artist={"Rafael Sanzio"} class={"scuola"} cover={"./Earth/Scuola.jpg"}></Painting>
                <div className={"poema text-right albumtext"}>
                    <Text text={"Não sou nada. || Nunca serei nada. || Não posso querer ser nada. || À parte isso, tenho em mim todos os sonhos do mundo."}
                          source={"Tabacaria, Álvaro de Campos"}></Text>
                </div>

                <div>
                    <h1 className={"text-white who amiri"}> Who are we?</h1>
                </div>

                <div className={"pt-5 text-center "}>
                    <div className={"planet"}>
                        <Planet className={""} image={"./Earthi.glb"}></Planet>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Earth;


