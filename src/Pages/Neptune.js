import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/album";
import Painting from "../Components/Painting";
import TextU from "../Components/TextU";
import Text from "../Components/Text";

function Neptune() {

    return (
        <div className={"container-fluid"}>
            <div className={" container-fluid w-100"}>

                <Painting name={"The Return of Neptune"} artist={"John Singleton Copley"} class={"dark mb-5"} cover={"./Neptune/return.jfif"}></Painting>
                <Album name={"Everything Not Saved Will Be Lost Part 2"} artist={"Foals"} class={"scuola crimson"} cover={"./Neptune/foals.jfif"}></Album>
                <Text className={"bra"} class={"poema"}></Text>

                <div className={"text-right"}>
                    <h1 className={"text-white who we purpose each amiri"}>Where do we end?</h1>
                </div>

                <div className={"pt-5 text-center "}>
                    <div className={"planet"}>
                        <Planet className={""} image={"./Neptune.glb"}></Planet>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Neptune;