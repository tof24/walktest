import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/album";
import Painting from "../Components/Painting";
import Text from "../Components/Text";

function Neptune() {

    return (
        <div className={"container-fluid"}>
            <div className={" container-fluid w-100"}>

                <Painting name={"The Return of Neptune"} artist={"John Singleton Copley"} class={"poema evans empire return"} cover={"./Neptune/return.jfif"}></Painting>
                <Album name={"Everything Not Saved Will Be Lost"} artist={"Foals"} class={"dark mb-5"} cover={"./Neptune/foals.jfif"}></Album>
                <div className={"oddity livro1 livro2 cesario text-left albumtext"}>
                    <Text text={"E, enorme, nesta massa irregular || A Dor humana busca os amplos horizontes, || E tem marés, de fel, como um sinistro mar!"}
                          source={"O Sentimento dum Ocidental III, Cesário Verde"}></Text>
                </div>

                <div className={"text-right"}>
                    <h1 className={"text-white who we purpose amiri"}>Where do we end?</h1>
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