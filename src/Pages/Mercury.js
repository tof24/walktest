import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/Album";
import Painting from "../Components/Painting";


function Mercury() {

    return (
        <div className={"container-fluid"}>
            <div className={" container-fluid w-100"}>
                <Album name={"In the Wee Small Hours"} artist={"Frank Sinatra"} class={"oddity"} cover={"./Mercury/frank.jpg"}></Album>
                <Album name={"In the Court of the Crimson King"} artist={"King Crimson"} class={"oddity crimson"} cover={"./Mercury/crimson.jpeg"}></Album>
                <Painting name={"The Starry Night"} artist={"Vincent van Gogh"} class={"dark mb-5"} cover={"./Mercury/starry.jpg"}></Painting>
                <Painting name={"The Course of Empire: Destruction"} artist={"Thomas Cole"} class={"poema evans empire"} cover={"./Mercury/empire.jpg"}></Painting>
                <div className={"text-right"}>
                    <h1 className={"text-white who we purpose amiri"}> Do we have purpose?</h1>
                </div>
                <div className={"pt-5 text-center "}>
                    <div className={"planet"}>
                        <Planet className={""} image={"./Mercury.glb"}></Planet>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mercury;