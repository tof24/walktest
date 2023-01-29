import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Timer from "../Components/Timer";
import Album from "../Components/Album";
import {useState, useEffect} from "react";
import Dropdown from "../Components/Dropdown";
import Dropdown2 from "../Components/Dropdown2";
import PlanetSearch from "../Components/PlanetSearch";
import info from "../Components/PlanetObjects";
import {Link} from "react-router-dom";
import Menu from "../Components/Menu";


function SearchPlanet() {

    const [order, serOrder] = useState('');
    const [category, setCategory] = useState('');
    const [one, setOne] = useState(info[0]);
    const [two, setTwo] = useState(info[1]);
    const [three, setThree] = useState(info[2]);
    const [four, setFour] = useState(info[3]);
    const [five, setFive] = useState(info[4]);
    const [six, setSix] = useState(info[5]);
    const [seven, setSeven] = useState(info[6]);
    const [eight, setEight] = useState(info[7]);
    const [refresh, setRefresh] = useState(0);

    const sortit = (value) => {
        serOrder(value)
    }
    const sortit2 = (value) => {
        setCategory(value)
    }

    useEffect(() => {
        if (order === "story"){
            info.sort(function(a, b) {
                return parseFloat(a.position) - parseFloat(b.position);
            });

            setOne( info[0]);
            setTwo( info[1]);
            setThree( info[2]);
            setFour( info[3]);
            setFive( info[4]);
            setSix( info[5]);
            setSeven( info[6]);
            setEight( info[7]);

        }
        if (order === "closer"){
            info.sort(function(a, b) {
                return parseFloat(a.distance) - parseFloat(b.distance);
            });

            setOne( info[0]);
            setTwo( info[1]);
            setThree( info[2]);
            setFour( info[3]);
            setFive( info[4]);
            setSix( info[5]);
            setSeven( info[6]);
            setEight( info[7]);

        }
        if (order === "further"){
            info.sort(function(a, b) {
                return parseFloat(b.distance) - parseFloat(a.distance);
            });

            setOne( info[0]);
            setTwo( info[1]);
            setThree( info[2]);
            setFour( info[3]);
            setFive( info[4]);
            setSix( info[5]);
            setSeven( info[6]);
            setEight( info[7]);

        }

        if (category === "terrestrial"){
            for (let i=0; i<8; i++){
                if (info[i].type==="Terrestrial"){
                    info[i].clas="d-block";
                }else{
                    info[i].clas="d-none";
                }
            }
            setOne( info[0]);
            setTwo( info[1]);
            setThree( info[2]);
            setFour( info[3]);
            setFive( info[4]);
            setSix( info[5]);
            setSeven( info[6]);
            setEight( info[7]);
            setRefresh(2);
        }

        if (category === "gas"){
            for (let i=0; i<8; i++){
                if (info[i].type==="Gas giant"){
                    info[i].clas="d-block";
                }else{
                    info[i].clas="d-none";
                }
            }
            setOne( info[0]);
            setTwo( info[1]);
            setThree( info[2]);
            setFour( info[3]);
            setFive( info[4]);
            setSix( info[5]);
            setSeven( info[6]);
            setEight( info[7]);
            setRefresh(3);
        }

        if (category === "all"){
            for (let i=0; i<8; i++){
                    info[i].clas="d-block";
            }
            setOne( info[0]);
            setTwo( info[1]);
            setThree( info[2]);
            setFour( info[3]);
            setFive( info[4]);
            setSix( info[5]);
            setSeven( info[6]);
            setEight( info[7]);
            setRefresh(4);
        }

    }, [order, category, refresh])

console.log(one, two, three,refresh, "olha os numberos")

    return (
        <div>
            <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <div  className={"bgblacksearch container-fluid"}>
            <div className={"bggrainsearch pt-5 text-white"}>
                <div className={"titlefont amiri searchpadding"}>Are you looking for something?</div>
                <div className={"container-fluid"}>
                    <div className={"d-lg-none"}>
                        <div className={"row pt-5"}>
                            <div className={"col-6"}>
                                <span className={"amiri text-white-50"}>Order by:</span><Dropdown onSelect={sortit}></Dropdown>
                            </div>

                            <div className={"col-6"}>
                                <span className={"amiri text-white-50"}>Category:</span><Dropdown2 onSelect={sortit2}></Dropdown2>
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <aside className={"d-none d-lg-block"}>
                            <div className={"h-100 linha"}>
                                <div>
                                 <span className={"amiri text-white-50"}>Order by:</span><Dropdown onSelect={sortit}></Dropdown>
                                </div>

                                <div>
                                    <span className={"amiri text-white-50"}>Category:</span><Dropdown2 onSelect={sortit2}></Dropdown2>
                                </div>
                            </div>
                        </aside>
                        <div className={"detaildiv col nunito"}>
                            <div className={"container-fluid"}>
                                <div className={"row "}>

                                    <div className={"col-12 col-md-6 pr-3 pb-3 my-4 text-center text-lg-left " + one.clas}>
                                        <div className={"w-100 text-center "}>
                                            <PlanetSearch class={"miniplanet"} image={one.imagem}></PlanetSearch>
                                        </div>

                                            <Link className={"link"} to={"/master"} state={one} >
                                            <h5 className={"amiri pb-0 mb-0 pt-3"}>{one.name}
                                            <br/><small className={"nunito pt-0 mt-0 text-white-50"}>{one.theme}</small></h5>
                                            </Link>

                                    </div>
                                    <div className={"col-12 col-md-6 pr-3 pb-3 my-4 text-center text-lg-left " + two.clas}>
                                        <div className={"w-100 text-center "}>
                                            <PlanetSearch class={"miniplanet"} image={two.imagem}></PlanetSearch>
                                        </div>
                                        <Link className={"link"} to={"/master"} state={two} >
                                            <h5 className={"amiri pb-0 mb-0 pt-3"}>{two.name}
                                                <br/><small className={"nunito pt-0 mt-0 text-white-50"}>{two.theme}</small></h5>
                                        </Link>
                                    </div>
                                    <div className={"col-12 col-md-6 pr-3 pb-3 my-4 text-center text-lg-left " + three.clas}>
                                        <div className={"w-100 text-center "}>
                                            <PlanetSearch class={"miniplanet"} image={three.imagem}></PlanetSearch>
                                        </div>
                                        <Link className={"link"} to={"/master"} state={three} >
                                            <h5 className={"amiri pb-0 mb-0 pt-3"}>{three.name}
                                                <br/><small className={"nunito pt-0 mt-0 text-white-50"}>{three.theme}</small></h5>
                                        </Link>
                                    </div>
                                    <div className={"col-12 col-md-6 pr-3 pb-3 my-4 text-center text-lg-left " + four.clas}>
                                        <div className={"w-100 text-center "}>
                                            <PlanetSearch class={"miniplanet"} image={four.imagem}></PlanetSearch>
                                        </div>
                                        <Link className={"link"} to={"/master"} state={one} >
                                            <h5 className={"amiri pb-0 mb-0 pt-3"}>{four.name}
                                                <br/><small className={"nunito pt-0 mt-0 text-white-50"}>{four.theme}</small></h5>
                                        </Link>
                                    </div>
                                    <div className={"col-12 col-md-6 pr-3 pb-3 my-4 text-center text-lg-left " + five.clas}>
                                        <div className={"w-100 text-center "}>
                                            <PlanetSearch class={"miniplanet"} image={five.imagem}></PlanetSearch>
                                        </div>
                                        <Link className={"link"} to={"/master"} state={five} >
                                            <h5 className={"amiri pb-0 mb-0 pt-3"}>{five.name}
                                                <br/><small className={"nunito pt-0 mt-0 text-white-50"}>{five.theme}</small></h5>
                                        </Link>
                                    </div>
                                    <div className={"col-12 col-md-6 pr-3 pb-3 my-4 text-center text-lg-left " + six.clas}>
                                        <div className={"w-100 text-center "}>
                                            <PlanetSearch class={"miniplanet"} image={six.imagem}></PlanetSearch>
                                        </div>
                                        <Link className={"link"} to={"/master"} state={six} >
                                            <h5 className={"amiri pb-0 mb-0 pt-3"}>{six.name}
                                                <br/><small className={"nunito pt-0 mt-0 text-white-50"}>{six.theme}</small></h5>
                                        </Link>
                                    </div>
                                    <div className={"col-12 col-md-6 pr-3 pb-3 my-4 text-center text-lg-left " + seven.clas}>
                                        <div className={"w-100 text-center "}>
                                            <PlanetSearch class={"miniplanet"} image={seven.imagem}></PlanetSearch>
                                        </div>
                                        <Link className={"link"} to={"/master"} state={seven} >
                                            <h5 className={"amiri pb-0 mb-0 pt-3"}>{seven.name}
                                                <br/><small className={"nunito pt-0 mt-0 text-white-50"}>{seven.theme}</small></h5>
                                        </Link>
                                    </div>
                                    <div className={"col-12 col-md-6 pr-3 pb-3 my-4 text-center text-lg-left " + eight.clas}>
                                        <div className={"w-100 text-center "}>
                                            <PlanetSearch class={"miniplanet"} image={eight.imagem}></PlanetSearch>
                                        </div>
                                        <Link className={"link"} to={"/master"} state={eight} >
                                            <h5 className={"amiri pb-0 mb-0 pt-3"}>{eight.name}
                                                <br/><small className={"nunito pt-0 mt-0 text-white-50"}>{eight.theme}</small></h5>
                                        </Link>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        </div>
    );
}

export default SearchPlanet;

