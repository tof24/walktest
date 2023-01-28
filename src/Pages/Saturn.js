import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/Album";
import Painting from "../Components/Painting";
import Text from "../Components/Text";


function Saturn() {

    return (
        <div className={"container-fluid"}>
            <div className={" container-fluid w-100"}>
                <Painting name={"The Persistence of Memory"} artist={"Salvador Dalí"} class={"dark mb-5"} cover={"./Saturn/memory.jpg"}></Painting>
                <Album name={"...Like Clockwork"} artist={"Queens of the Stone Age"} class={"scuola"} cover={"./Saturn/queens.jpg"}></Album>
                <Album name={"Night Train"} artist={"The Oscar Peterson Trio"} class={"poema evans train"} cover={"./Saturn/train.jfif"}></Album>
                <div className={"oddity livro1 livro2 text-left albumtext"}>
                    <Text text={"O próprio viver é morrer, porque não|| temos um dia a mais na nossa vida que || não tenhamos, nisso, um dia a menos nela."}
                          source={"Livro do Desassossego, Fernando Pessoa"}></Text>
                </div>
                <div>
                    <h1 className={"text-white who we how amiri"}> However,<br/> do we have time?</h1>
                </div>
                <div className={"pt-5 text-center "}>
                    <div className={"planet"}>
                        <Planet className={""} image={"./Saturn.glb"}></Planet>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Saturn;