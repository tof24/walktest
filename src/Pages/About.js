import '../App.css'
import '../bootstrap.min.css'
import Menu from "../Components/Menu";


function About() {

    return (
        <div>
            <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
            <div className={"container-fluid centra bgblack bggrain overflow-hidden"}>
                <div className={"container-fluid w-100 text-center h-100 align-items-center"}>
                    <div className={"d-block w-100 py-5 px-3 px-sm-5"}>
                        <p className={"text-white amiri about"}>Space Walk is a journey through the solar system where every planet represents a different side in the mistery of human life. Our time here is limited yet we are able to give it meaning through art and passion.</p>
                        <p className={"text-white amiri about mt-5"}>André Domingues and Juliana Assis made this project for Web Development at the Masters in Design and Multimedia, University of Coimbra.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;