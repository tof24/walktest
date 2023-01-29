import '../App.css'
import '../bootstrap.min.css'
import {useState, useEffect} from "react";
import info from "../Components/PlanetObjects";
import {Link, useLocation, useParams} from "react-router-dom";
import PlanetSearch from "../Components/PlanetSearch";
import {API_URL} from "../Components/api";
import Menu from "../Components/Menu";



function Master() {
    const location = useLocation();
    const info = location.state;
    console.log(info, "sad")



    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState([]);
    const [loadingback, setLoadingback] = useState("vh-100");




    const fetchProjects = async(category = '') => {
        setLoading(true);
        await fetch(API_URL + info.name + "?per_page=20")
            .then(response => response.json())
            .then(result => {
                setLoading(false)
                makedisplay(result)
            });
    }


    useEffect(() => {
        fetchProjects();
    }, [])



    function makedisplay(planet){
        let tra=[]
        for (let i=0; i<planet.length; i++){
            tra[i]= <Link to={"/detail"} state={planet[i]}><img className={"masterart p-1"} src={planet[i].acf.img_cover.url}/></Link>;
        }

        setDisplay(tra)
        console.log(planet, "é isto")

        setTimeout(function() {
            setLoadingback(" ")
        }, 300);
    }






    return (
        <div>
            <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <div  className={"bgblacksearch container-fluid " + loadingback}>
            <div className={"bggrainsearch pt-5 text-white " + loadingback}>
                <div className={"container-fluid masterpading"}>
                    <div className={"px-0 d-block d-lg-none "}>
                        <div className={"h-100 text-centerpt-5 w-75 mx-auto "}>


                            <div className={"w-100"}>
                                <div className={"titlefont amiri ml-lg-4 pl-5 h3"}>{info.name}</div>
                                <div className={"titlefont amiri ml-lg-4 pl-5 h4 text-white-50"}>{info.theme}</div>
                            </div>


                            <div className={"pt-3"}>
                                <PlanetSearch class={"my-3 smallplanet"} image={info.imagem}></PlanetSearch>
                                <div className={"row text-center pt-3"}>
                                    <div className={"col-4 text-center "}>
                                        <p className={"pb-0 mb-0 amiri text-white-50"}>Distance to Earth</p>
                                        <span className={"pl-1 amiri text-white"}> {info.distance} km</span>
                                    </div>
                                    <div className={"col-4 text-center "}>
                                        <p className={"pb-0 mb-0 amiri text-white-50"}>Revolution</p>
                                        <span className={"pl-1 amiri text-white"}> {info.rotation} km</span>
                                    </div>
                                    <div className={"col-4 text-center "}>
                                    <p className={"pb-0 mb-0 amiri text-white-50"}>Category</p>
                                    <span className={"pl-1 amiri text-white"}> {info.type} km</span>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-3 d-none d-lg-block"}>
                            <div className={"titlefont amiri ml-lg-5 pl-5"}>{info.name}</div>
                            <div className={"titlefont amiri ml-lg-5 pl-5 h4 text-white-50"}>{info.theme}</div>
                        </div>
                        <div className={"col-12 col-sm-10 mx-auto col-lg-6 text-center masterpading"}>
                            {display}
                        </div>
                        <div className={"col-3 d-none d-lg-block"}>
                            <div className={"position-relative teste w-100 h-100 text-center "}>
                                <div className={"sticky-planet text-center pl-2"}>

                                    <div className={"text-right"}>
                                        <p className={"amiri text-white-50 pt-4"}>Distance to Earth  <span className={"pl-1 amiri text-white"}> {info.distance} km</span></p>
                                        <p className={"amiri text-white-50"}>Revolution  <span className={"pl-1 text-white"}> {info.rotation} days</span></p>
                                        <p className={"amiri text-white-50"}>Category  <span className={"pl-1 text-white"}> {info.type}</span></p>
                                    </div>
                                    <PlanetSearch class={""} image={info.imagem}></PlanetSearch>
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

export default Master;


