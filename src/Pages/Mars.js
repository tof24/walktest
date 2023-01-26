import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/album";
import Painting from "../Components/Painting";
import Text from "../Components/Text";
import { Link } from 'react-router-dom';

function Mars() {


    return (

        <div className={"container-fluid centra"}>

            <div className={" container-fluid w-100"}>

                <Album name={"Hope"} artist={"44th Move"} class={"dark"} cover={"./Mars/hope.jfif"}></Album>
                <Album name={"10000 Anos Depois entre Vénus e Marte"} artist={"José Cid"} class={"oddity"} cover={"./Mars/cid.jpg"}></Album>
                <Painting name={"The Consequences of War"} artist={"Peter Paul Rubens"} class={"scuola"} cover={"./Mars/war.jpg"}></Painting>
                <Text className={"bra"} class={"poema"}></Text>

                <div>
                    <h1 className={"text-white who amiri"}> Is there hope in<br/> the end?</h1>
                </div>

                <div className={"pt-5 text-center "}>
                    <div className={"planet"}>
                        <Planet className={""} image={"./Mars.glb"}></Planet>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Mars;
