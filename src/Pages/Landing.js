import '../App.css'
import '../bootstrap.min.css'
import Planet from "../Components/Planet";
import Album from "../Components/album";
import Painting from "../Components/Painting";
import Text from "../Components/Text";
import { Link } from 'react-router-dom';


function Landing() {

    return (

        <div className={"container-fluid centra"}>
            <div className={"container-fluid h-100 align-items-center"}>
                <div>
                    <h1 className={"text-white text-left amiri title mb-0"}>A walk in<br/> the shoes of<br/> None.</h1>
                    <div className={"text-right px-5 pt-5 mt-5 quote midsub w-75"}>
                        <p className={"text-white nunito mb-0"}>"Newton's third law. You got to leave something behind."</p>
                        <p className={"text-white nunito small mt-2"}>Interstellar, 2014</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;