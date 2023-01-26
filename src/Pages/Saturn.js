import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/album";
import Painting from "../Components/Painting";
import TextU from "../Components/TextU";
import Text from "../Components/Text";

function Saturn() {

    return (
        <div className={"container-fluid"}>
            <div className={" container-fluid w-100"}>

                <Painting name={"The Persistence of Memory"} artist={"Salvador Dalí"} class={"dark mb-5"} cover={"./Saturn/memory.jpg"}></Painting>
                <Album name={"...Like Clockwork"} artist={"Queens of the Stone Age"} class={"scuola crimson"} cover={"./Saturn/queens.jpg"}></Album>
                <Album name={"Night Train"} artist={"The Oscar Peterson Trio"} class={"oddity"} cover={"./Saturn/train.jfif"}></Album>
                <Text className={"bra"} class={"poema"}></Text>

                <div className={"text-right"}>
                    <h1 className={"text-white who we purpose each amiri"}>However, do we have time?</h1>
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