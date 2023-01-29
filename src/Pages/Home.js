import '../App.css'
import '../bootstrap.min.css'
import Timer from "../Components/Timer";
import Text2 from "./Text2";
import Earth from "./Earth";
import Uranus from "./Uranus";
import Mercury from "./Mercury";
import Jupiter from "./Jupiter";
import Venus from "./Venus";
import Mars from "./Mars";
import Saturn from "./Saturn";
import Neptune from "./Neptune";
import Landing from "./Landing";
import {useState, useEffect} from "react";
import Menu from "../Components/Menu";


function Home() {

    const [current, setCurrent] = useState(<Landing/>);
    const [estilo, setEstilo] = useState("");
    const [page, setPage] = useState("");
    const [days, setDays] = useState("");
    const [planet, setPlanet] = useState("");
    const [hub, setHub] = useState("d-none");
    const [refresh, setRefresh] = useState(0);
    const [currentScreen, setCurrentScreen] = useState(-75);
    const [wheel, setWheel] = useState(0);

    function handleScroll(event) {

        console.log("mee", currentScreen)
        if (event.deltaY > 0) {
            setCurrentScreen(prevScreen => prevScreen + 1);
            setWheel(0);
        } else {
            setCurrentScreen(prevScreen => prevScreen - 1);
            setWheel(1);
        }
    }

    useEffect(() => {
        console.log("inside useeefect", currentScreen)
        console.log("inside 2", wheel)

        //landing page
        if (currentScreen === -70 && wheel === 1) {
            setEstilo("textin centra")
            setCurrent(<Landing/>)
            setHub("d-none")
        }
        if (currentScreen === -65 && wheel === 0) {
            setEstilo("textout centra")
        }

        //narrativa 0
        if (currentScreen === -55 && wheel === 1) {
            setEstilo("textout centra")
        }
        if (currentScreen === -50 && wheel === 0) {
            setCurrent(<Text2 classi={"d-none"} frase1={"In this vast universe what are we here for?"}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
            setHub("d-block")
            setRefresh(5)
        }
        if (currentScreen === -40 && wheel === 1) {
            setCurrent(<Text2 classi={"d-none"} frase1={"In this vast universe what are we here for?"}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === -35 && wheel === 0) {
            setEstilo("textout centra")
        }

        //animação Terra
        if (currentScreen === -25 && wheel === 1) {
            setEstilo("fade-out2 centra")
        }
        if (currentScreen === -20 && wheel === 0) {
            setCurrent(<Earth/>)
            setPage("1")
            setDays("365")
            setPlanet("Earth")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === -10 && wheel === 1) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === -5 && wheel === 0) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 5 && wheel === 1) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 10 && wheel === 0) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 20 && wheel === 1) {
            setCurrent(<Earth/>)
            setPage("1")
            setDays("365")
            setPlanet("Earth")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 25 && wheel === 0) {
            setEstilo("fade-out2 centra")
        }

        //narrativa 1
        if (currentScreen === 35 && wheel === 1) {
            setEstilo("textout centra")
        }
        if (currentScreen === 40 && wheel === 0) {
            setCurrent(<Text2 frase1={"Are we meaningful?"} frase2={"Or just small dots in an infinite universe?"}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 50 && wheel === 1) {
            setCurrent(<Text2 frase1={"Are we meaningful?"} frase2={"Or just small dots in an infinite universe?"}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 55 && wheel === 0) {
            setEstilo("textout centra")
        }

        //animação Uranus
        if (currentScreen === 65 && wheel === 1) {
            setEstilo("fade-out2 centra")
        }
        if (currentScreen === 70 && wheel === 0) {
            setCurrent(<Uranus/>)
            setPage("2")
            setDays("30 680")
            setPlanet("Uranus")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 80 && wheel === 1) {
            setEstilo("fade-out1 centra")

        }
        if (currentScreen === 85 && wheel === 0) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 95 && wheel === 1) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 100 && wheel === 0) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 110 && wheel === 1) {
            setCurrent(<Uranus/>)
            setPage("2")
            setDays("30 680")
            setPlanet("Uranus")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 115 && wheel === 0) {
            setEstilo("fade-out2 centra")
        }

        //narrativa 2
        if (currentScreen === 125 && wheel === 1) {
            setEstilo("textout centra")
        }
        if (currentScreen === 130 && wheel === 0) {
            setCurrent(<Text2 classi={"d-none"} frase1={"But can we be more than nothing?"}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 140 && wheel === 1) {
            setCurrent(<Text2 classi={"d-none"} frase1={"But can we be more than nothing?"}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 145 && wheel === 0) {
            setEstilo("textout centra")
        }

        //animação Mercury
        if (currentScreen === 155 && wheel === 1) {
            setEstilo("fade-out2 centra")
        }
        if (currentScreen === 160 && wheel === 0) {
            setCurrent(<Mercury/>)
            setPage("3")
            setDays("88")
            setPlanet("Mercury")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 170 && wheel === 1) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 175 && wheel === 0) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 185 && wheel === 1) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 190 && wheel === 0) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 200 && wheel === 1) {
            setCurrent(<Mercury/>)
            setPage("3")
            setDays("88")
            setPlanet("Mercury")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 205 && wheel === 0) {
            setEstilo("fade-out2 centra")
        }

        //narrativa 3
        if (currentScreen === 215 && wheel === 1) {
            setEstilo("textout centra")
        }
        if (currentScreen === 220 && wheel === 0) {
            setCurrent(<Text2 classi={"d-none"} frase1={"After all, we are unique."}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 230 && wheel === 1) {
            setCurrent(<Text2 classi={"d-none"} frase1={"After all, we are unique."}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 235 && wheel === 0) {
            setEstilo("textout centra")
        }

        //animação Jupiter
        if (currentScreen === 245 && wheel === 1) {
            setEstilo("fade-out2 centra")
        }
        if (currentScreen === 250 && wheel === 0) {
            setCurrent(<Jupiter/>)
            setPage("4")
            setDays("10 476")
            setPlanet("Jupiter")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 260 && wheel === 1) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 265 && wheel === 0) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 275 && wheel === 1) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 280 && wheel === 0) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 290 && wheel === 1) {
            setCurrent(<Jupiter/>)
            setPage("4")
            setDays("10 476")
            setPlanet("Jupiter")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 295 && wheel === 0) {
            setEstilo("fade-out2 centra")
        }

        //narrativa 4
        if (currentScreen === 305 && wheel === 1) {
            setEstilo("textout centra")
        }
        if (currentScreen === 310 && wheel === 0) {
            setCurrent(<Text2 frase1={"Can you see?"} frase2={"We are kind of beautiful."}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 320 && wheel === 1) {
            setCurrent(<Text2 frase1={"Can you see?"} frase2={"We are kind of beautiful."}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 325 && wheel === 0) {
            setEstilo("textout centra")
        }

        //animação Venus
        if (currentScreen === 335 && wheel === 1) {
            setEstilo("fade-out2 centra")
        }
        if (currentScreen === 340 && wheel === 0) {
            setCurrent(<Venus/>)
            setPage("5")
            setDays("224")
            setPlanet("Venus")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 350 && wheel === 1) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 355 && wheel === 0) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 365 && wheel === 1) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 370 && wheel === 0) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 380 && wheel === 1) {
            setCurrent(<Venus/>)
            setPage("5")
            setDays("224")
            setPlanet("Venus")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 385 && wheel === 0) {
            setEstilo("fade-out2 centra")
        }

        //narrativa 5
        if (currentScreen === 395 && wheel === 1) {
            setEstilo("textout centra")
        }
        if (currentScreen === 400 && wheel === 0) {
            setCurrent(<Text2 classi={"d-none"} frase1={"So much we can achieve."}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 410 && wheel === 1) {
            setCurrent(<Text2 classi={"d-none"} frase1={"So much we can achieve."}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 415 && wheel === 0) {
            setEstilo("textout centra")
        }

        //animação Mars
        if (currentScreen === 425 && wheel === 1) {
            setEstilo("fade-out2 centra")
        }
        if (currentScreen === 430 && wheel === 0) {
            setCurrent(<Mars/>)
            setPage("6")
            setDays("687")
            setPlanet("Mars")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 440 && wheel === 1) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 445 && wheel === 0) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 455 && wheel === 1) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 460 && wheel === 0) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 470 && wheel === 1) {
            setCurrent(<Mars/>)
            setPage("6")
            setDays("687")
            setPlanet("Mars")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 475 && wheel === 0) {
            setEstilo("fade-out2 centra")
        }

        //narrativa 6
        if (currentScreen === 485 && wheel === 1) {
            setEstilo("textout centra")
        }
        if (currentScreen === 490 && wheel === 0) {
            setCurrent(<Text2 classi={"d-none"} frase1={"You are feeling infinite."}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("?")
        }
        if (currentScreen === 500 && wheel === 1) {
            setCurrent(<Text2 classi={"d-none"} frase1={"You are feeling infinite."}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 505 && wheel === 0) {
            setEstilo("textout centra")
        }

        //animação Saturn
        if (currentScreen === 515 && wheel === 1) {
            setEstilo("fade-out2 centra")
        }
        if (currentScreen === 520 && wheel === 0) {
            setCurrent(<Saturn/>)
            setPage("7")
            setDays("10 759")
            setPlanet("Saturn")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 530 && wheel === 1) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 535 && wheel === 0) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 545 && wheel === 1) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 550 && wheel === 0) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 560 && wheel === 1) {
            setCurrent(<Saturn/>)
            setPage("7")
            setDays("10 759")
            setPlanet("Saturn")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 565 && wheel === 0) {
            setEstilo("fade-out2 centra")
        }

        //narrativa 7
        if (currentScreen === 575 && wheel === 1) {
            setEstilo("textout centra")
        }
        if (currentScreen === 580 && wheel === 0) {
            setCurrent(<Text2 classi={"d-none"} frase1={"Life is ephemeral."}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 590 && wheel === 1) {
            setCurrent(<Text2 classi={"d-none"} frase1={"Life is ephemeral."}> </Text2>)
            setEstilo("textin centra")
            setPage("?")
            setDays("?")
            setPlanet("")
        }
        if (currentScreen === 595 && wheel === 0) {
            setEstilo("textout centra")
        }

        //animação Neptune
        if (currentScreen === 605 && wheel === 1) {
            setEstilo("fade-out2 centra")
        }
        if (currentScreen === 610 && wheel === 0) {
            setCurrent(<Neptune/>)
            setPage("8")
            setDays("60 265")
            setPlanet("Neptune")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 620 && wheel === 1) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 625 && wheel === 0) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 635 && wheel === 1) {
            setEstilo("fade-in2 centra")
        }
        if (currentScreen === 640 && wheel === 0) {
            setEstilo("fade-out1 centra")
        }
        if (currentScreen === 650 && wheel === 1) {
            setCurrent(<Neptune/>)
            setPage("8")
            setDays("60 265")
            setPlanet("Neptune")
            setEstilo("fade-in1 centra")
        }
        if (currentScreen === 655 && wheel === 0) {
            setEstilo("fade-out2 centra")
        }

        //narrativa 8
        if (currentScreen === 665 && wheel === 1) {
            setEstilo("textout centra")
        }
        if (currentScreen === 670 && wheel === 0) {
            setCurrent(<Text2 frase1={"Time to let go."} frase3={"Thank you for your journey."}> </Text2>)
            setEstilo("textin centra")
            setPage("∞")
            setDays("∞")
            setPlanet("Infinite")
        }
        if (currentScreen === 680 && wheel === 1) {
            setCurrent(<Text2 frase1={"Time to let go."} frase3={"Thank you for your journey."}> </Text2>)
            setEstilo("textin centra")
            setPage("∞")
            setDays("∞")
            setPlanet("Infinite")
        }
        if (currentScreen === 685 && wheel === 0) {
            setEstilo("textout centra")
        }

    }, [currentScreen]);

    return (
        <div onWheel={handleScroll} className={"bgblack container-fluid position-relative overflow-hidden"}>
            <div className={"sticky-top ui " + hub}>
                <div className={"timer"}>
                    <span className={"text-white amiri"}><Timer refresh={refresh}></Timer></span>
                </div>
                <div className={"counter"}>
                    <div className={"frac text-white amiri"}>
                        <span>{page}</span>
                        <span className={"symbol"}>/</span>
                        <span className={"bottom"}>8</span>
                    </div>
                </div>
                <div className={"days"}>
                    <span className={"text-white amiri"}>{days} days</span>
                </div>
                <div className={"planeti"}>
                    <span className={"text-white amiri"}> {planet} </span>
                </div>
            </div>
            <div className={"bggrain"}>
                <div className={estilo}>
                    {current}
                </div>
            </div>
        </div>
    );
}

export default Home;


