import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/Album";
import Painting from "../Components/Painting";
import Text from "../Components/Text";
import {Link} from 'react-router-dom';


function Mars() {

    return (
        <div className={"container-fluid centra"}>
            <div className={" container-fluid w-100"}>
                <Link to="detail" state={["Mars","44th-move"]}><Album name={"44th Move"} artist={"44th Move"} class={"oddity"} cover={"./Mars/hope.jfif"}></Album></Link>
                <Link to="detail" state={["Mars","10-000-anos-depois-entre-venus-e-marte"]}><Album name={"10000 Anos Depois entre Vénus e Marte"} artist={"José Cid"} class={"scuola"} cover={"./Mars/cid.jpg"}></Album></Link>
                <Link to="detail" state={["Mars","consequences-of-war"]}><Painting name={"The Consequences of War"} artist={"Peter Paul Rubens"} class={"dark"} cover={"./Mars/war.jpg"}></Painting></Link>
                <Link to="detail" state={["Mars","a-partir-do-zero"]}><div className={"poema text-right albumtext"}>
                    <Text text={"Vamos voltar do infinito do além || A um planeta que deixámos para trás. || A partir do zero, renascer, reencontrar || O ar, o mar, a terra, o sol, o amor, a paz."}
                          source={"A Partir do Zero, José Cid"}></Text>
                </div></Link>
                <div>
                    <h1 className={"text-white who amiri"}> Is there hope?</h1>
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
