import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/Album";
import Painting from "../Components/Painting";
import Text from "../Components/Text";


function Mars() {

    return (
        <div className={"container-fluid centra"}>
            <div className={" container-fluid w-100"}>
                <Album name={"Hope"} artist={"44th Move"} class={"oddity"} cover={"./Mars/hope.jfif"}></Album>
                <Album name={"10000 Anos Depois entre Vénus e Marte"} artist={"José Cid"} class={"scuola"} cover={"./Mars/cid.jpg"}></Album>
                <Painting name={"The Consequences of War"} artist={"Peter Paul Rubens"} class={"dark"} cover={"./Mars/war.jpg"}></Painting>
                <div className={"poema text-right albumtext"}>
                    <Text text={"Vamos voltar do infinito do além || A um planeta que deixámos para trás. || A partir do zero, renascer, reencontrar || O ar, o mar, a terra, o sol, o amor, a paz."}
                          source={"A Partir do Zero, José Cid"}></Text>
                </div>
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
