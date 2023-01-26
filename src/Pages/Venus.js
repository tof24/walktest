import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/album";
import Painting from "../Components/Painting";
import TextU from "../Components/TextU";

function Venus() {

    return (
        <div className={"container-fluid"}>
            <div className={" container-fluid w-100"}>

                <Album name={"Ok Computer"} artist={"Radiohead"} class={"oddity"} cover={"./Venus/ok.jfif"}></Album>
                <Painting name={"The Birth of Venus"} artist={"Sandro Botticelli"} class={"oddity empire"} cover={"./Venus/birth.jpg"}></Painting>
                <Painting name={"The Kiss"} artist={"Gustav Klimt"} class={"scuola crimson"} cover={"./Venus/kiss.jpg"}></Painting>
                <TextU class={"poemaU"}></TextU>
                <div className={"text-left"}>
                    <h1 className={"text-white who we amiri"}> So much<br/> to be proud of.</h1>
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