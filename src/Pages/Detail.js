import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Timer from "../Components/Timer";
import Album from "../Components/Album";
import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import Menu from "../Components/Menu";

function Detail() {


    const location = useLocation();
    const info = location.state.acf;
    const [refresh, setRefresh] = useState(0);
    const [render, setRender] = useState([]);
    const [adaptablePaint, setAdaptablePaint] = useState("");
    const [adaptablePoem, setAdaptablePoem] = useState("");
    const [Poem, setPoem] = useState("d-none");
    const [Painting, setPainting] = useState("d-none");
    const [poema, setPoema] = useState([]);



    console.log(info)
    useEffect(() => {
        processesinfo();
    }, [])

    const processesinfo = () => {
        const tracksraw = info.tracks;
        const tracks = tracksraw.split('||');
        const lengthraw = info.tracklength;
        const length = lengthraw.split('||');

        if (info.content==="Poem") {
            const poemi = info.poema;
            const newpeoma = poemi.split("<br />");
            console.log("qweqweqweweqweq", newpeoma)
            const last = ArrayToParagraphs(newpeoma);
            setPoema(last);
        }

        maketracks(tracks, length);

        if (info.content==="Painting"){
            setAdaptablePaint("d-none");
            setPainting("d-block")
        }
        if (info.content==="Poem"){
            setAdaptablePaint("d-none");
            setAdaptablePoem("d-none");
            setPoem("d-block")
        }
    }

    function ArrayToParagraphs(arr) {
        return arr.map(value => {
            return <p>{value}</p>;
        });
    }

    const maketracks = (trackss, lengths) => {
        let tracks= trackss;
        let length= lengths;

        let render2=[];
        for (let i = 0 ; i < tracks.length; i++){
            render2[i]=<div key={i} className={"my-3"}><span className={"pr-4"}>{i+1}</span> <span>{tracks[i]}</span> <span className={"float-right"}>{length[i]}</span></div>;

            console.log(render2[i])
        }

        setRefresh(5);
        setRender(render2);
    }





    return (
        <div>
            <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <div  className={"bgblacksearch container-fluid px-0"}>

            <div className={" bggrainsearch text-white"}>
                <div className={"container-fluid "}>
                    <div className={"px-0 d-block d-md-none "}>
                        <div className={"h-100 text-center pt-5"}>
                            <img className={"assideimg px-4"} src={info.img_cover.url}/>

                            <p className={"amiri h4 pt-4"}>{info.name}</p>
                            <p className={"amiri h5 text-white-50"}>{info.artist}</p>

                            <div className={"pt-3"}>
                                <p> <span className={"small text-white-50 pr-3"}>Content:</span> {info.content}</p>
                                <p> <span className={"small text-white-50 pr-3"}> Release: </span>{info.releasedate}</p>
                                <p className={adaptablePoem}> <span className={"small text-white-50 pr-3"}> Genre: </span>{info.genre}</p>
                                <p className={adaptablePaint}> <span className={"small text-white-50 pr-3"}>Length: </span>{info.length}</p>
                            </div>

                        </div>
                    </div>
                    <div className={"row"}>
                    <aside className={"col-3 px-0 d-none d- d-md-block "}>
                        <div className={"h-100 linha"}>
                            <img className={"assideimg"} src={info.img_cover.url}/>

                            <p className={"amiri h4 pt-4"}>{info.name}</p>
                            <p className={"amiri h5 text-white-50"}>{info.artist}</p>

                            <div className={"pt-3"}>
                                <p> <span className={"small text-white-50 pr-3"}>Content:</span> {info.content}</p>
                                <p> <span className={"small text-white-50 pr-3"}> Release: </span>{info.releasedate}</p>
                                <p className={adaptablePoem}> <span className={"small text-white-50 pr-3"}> Genre: </span>{info.genre}</p>
                                <p className={adaptablePaint}> <span className={"small text-white-50 pr-3"}>Length: </span>{info.length}</p>
                            </div>

                        </div>
                    </aside>
                    <div className={"detaildiv col mr-sm-5 mx-sm-5 nunito"}>
                       <h1 className={"amiri"}>{info.name}</h1>
                        <h5 className={"amiri text-white-50"}>{info.artist}</h5>
                        <div className={"nunito py-5"}>
                            {info.summary}
                        </div>

                        <div className={"w-100 " + adaptablePaint}>
                            <h5> Tracks</h5>
                            <div className={"pt-3 small text-white-50"}>
                                <span className={"pr-4"}>#</span> <span>Title</span> <span className={"float-right"}>Length</span>
                            </div>
                            <div className={"pt-3"}>
                                {render}
                            </div>
                        </div>

                        <div className={Painting}>
                                <h5 className={"amiri text-white-50 pb-3"}>The Painting:</h5>
                                <div className={"w-100 text-center pb-5"}>
                                    <img className={"displaypaint"} src={info.img_cover.url}/>
                                </div>
                        </div>

                        <div className={Poem}>
                            <h5 className={"amiri text-white-50 pb-3"}>The Poem:</h5>
                            {poema}
                        </div>
                    </div>
                    </div>
                </div>
            </div>


        </div>
        </div>
    );
}

export default Detail;


