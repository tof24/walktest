import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/Album";
import Painting from "../Components/Painting";
import Text from "../Components/Text";


function Uranus() {

    return (
        <div className={"container-fluid"}>
            <div className={" container-fluid w-100"}>
                <Album name={"A Song For Every Moon"} artist={"Bruno Major"} class={"scuola"} cover={"./Uranus/moon.jfif"}></Album>
                <Album name={"Undercurrent"} artist={"Bill Evans"} class={"poema evans"} cover={"./Uranus/undercurrent.jpg"}></Album>
                <Painting name={"Nighthawks"} artist={"Edward Hopper"} class={"dark mb-5"} cover={"./Uranus/nightwalks.jpg"}></Painting>
                <div className={"oddity livro1 text-right albumtext"}>
                    <Text text={"Não tenho ambições nem desejos. || Ser poeta não é uma ambição minha. || É a minha maneira de estar sozinho."}
                          source={"Eu Nunca Guardei Rebanhos, Alberto Caeiro"}></Text>
                </div>
                <div className={"text-right"}>
                    <h1 className={"text-white who we amiri"}> We may be alone in <br/> this darkness.</h1>
                </div>
                <div className={"pt-5 text-center "}>
                    <div className={"planet"}>
                        <Planet className={""} image={"./Uranus.glb"}></Planet>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Uranus;


