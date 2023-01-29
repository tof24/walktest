import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/Album";
import Painting from "../Components/Painting";
import {Link} from 'react-router-dom';

function Jupiter() {

    return (
        <div className={"container-fluid"}>
            <div className={" container-fluid w-100"}>
                <Link to="detail" state={["Jupiter","inedito"]}><Album name={"Inédito"} artist={"Tom Jobim"} class={"dark inedito"} cover={"./Jupiter/inedito.jpg"}></Album></Link>
                <Link to="detail" state={["Jupiter","whats-going-on"]}><Album name={"What's Going On"} artist={"Marvin Gaye"} class={"dark whats"} cover={"./Jupiter/marvin.jpg"}></Album></Link>
                <Link to="detail" state={["Jupiter","ejiri-in-suruga-province"]}><Painting name={"Ejiri in Suruga Province"} artist={"Katsushika Hokusai"} class={"poema"} cover={"./Jupiter/ejiri.jfif"}></Painting></Link>
                <Link to="detail" state={["Jupiter","man-and-woman-in-front-of-a-pile-of-excrement"]}><Painting name={"Man and Woman in Front of a Pile of Excrement"} artist={"Joan Miró"} class={"oddity"} cover={"./Jupiter/miro.jpg"}></Painting></Link>
                <div className={"text-right"}>
                    <h1 className={"text-white who we purpose amiri"}>Each one in its own <br/> different way.</h1>
                </div>
                <div className={"pt-5 text-center "}>
                    <div className={"planet"}>
                        <Planet className={""} image={"./Jupiter.glb"}></Planet>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Jupiter;