import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/Album";
import Painting from "../Components/Painting";
import {Link} from 'react-router-dom';

function Mercury() {

    return (
        <div className={"container-fluid"}>
            <div className={" container-fluid w-100"}>
                <Link to="detail" state={["Mercury","in-the-wee-small-hours"]}><Album name={"In the Wee Small Hours"} artist={"Frank Sinatra"} class={"oddity"} cover={"./Mercury/frank.jpg"}></Album></Link>
                <Link to="detail" state={["Mercury","in-the-court-of-the-crimson-king"]}><Album name={"In the Court of the Crimson King"} artist={"King Crimson"} class={"oddity crimson"} cover={"./Mercury/crimson.jpeg"}></Album></Link>
                <Link to="detail" state={["Mercury","the-starry-night"]}><Painting name={"The Starry Night"} artist={"Vincent van Gogh"} class={"dark mb-5"} cover={"./Mercury/starry.jpg"}></Painting></Link>
                <Link to="detail" state={["Mercury","the-course-of-empire-destruction"]}><Painting name={"The Course of Empire: Destruction"} artist={"Thomas Cole"} class={"poema evans empire"} cover={"./Mercury/empire.jpg"}></Painting></Link>
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