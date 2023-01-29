import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/Album";
import Painting from "../Components/Painting";
import Text from "../Components/Text";
import {Link} from 'react-router-dom';


function Venus() {

    return (
        <div className={"container-fluid"}>
            <div className={" container-fluid w-100"}>
                <Link to="detail" state={["Venus","ok-computer"]}><Album name={"Ok Computer"} artist={"Radiohead"} class={"oddity empire ok"} cover={"./Venus/ok.jfif"}></Album></Link>
                <Link to="detail" state={["Venus","the-birth-of-venus"]}><Painting name={"The Birth of Venus"} artist={"Sandro Botticelli"} class={"oddity"} cover={"./Venus/birth.jpg"}></Painting></Link>
                <Link to="detail" state={["Venus","the-kiss"]}><Painting name={"The Kiss"} artist={"Gustav Klimt"} class={"scuola crimson kiss"} cover={"./Venus/kiss.jpg"}></Painting></Link>
                <Link to="detail" state={["Venus","os-lusiadas-canto-ix-79-83"]}><div className={"scuola canto text-left albumtext"}>
                    <Text text={"Oh, que famintos beijos na floresta! || E que mimoso choro que soava! || Que afagos tão suaves! Que ira honesta, || Que em risinhos alegres se tornava! || O que mais passam na manhã e na sesta, || Que Vénus com prazeres inflamava, || Melhor é experimentá-lo que julgá-lo, || Mas julgue-o quem não pode experimentá-lo."}
                          source={"Os Lusíadas, Canto IX 79-83, Luís de Camões"}></Text>
                </div></Link>
                <div className={"text-left"}>
                    <h1 className={"text-white who proud amiri"}>So much to <br/> be proud of.</h1>
                </div>
                <div className={"pt-5 text-center "}>
                    <div className={"planet"}>
                        <Planet className={""} image={"./Venus.glb"}></Planet>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Venus;