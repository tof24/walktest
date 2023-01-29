import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/Album";
import Painting from "../Components/Painting";
import Text from "../Components/Text";
import {Link} from 'react-router-dom';

function Uranus() {

    return (
        <div className={"container-fluid"}>
            <div className={" container-fluid w-100"}>
                <Link to="detail" state={["Uranus","a-song-for-every-moon"]}><Album name={"A Song For Every Moon"} artist={"Bruno Major"} class={"scuola"} cover={"./Uranus/moon.jfif"}></Album></Link>
                <Link to="detail" state={["Uranus","undercurrent"]}><Album name={"Undercurrent"} artist={"Bill Evans"} class={"poema evans"} cover={"./Uranus/undercurrent.jpg"}></Album></Link>
                <Link to="detail" state={["Uranus","nighthawks"]}><Painting name={"Nighthawks"} artist={"Edward Hopper"} class={"dark mb-5"} cover={"./Uranus/nightwalks.jpg"}></Painting></Link>
                            <Link to="detail" state={["Uranus","eu-nunca-guardei-rebanhos"]}><div className={"oddity livro1 text-right albumtext"}>
                    <Text text={"Não tenho ambições nem desejos. || Ser poeta não é uma ambição minha. || É a minha maneira de estar sozinho."}
                          source={"Eu Nunca Guardei Rebanhos, Alberto Caeiro"}></Text>
                            </div></Link>
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


