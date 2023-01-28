import '../App.css'
import '../bootstrap.min.css'


function Text2(props) {

    return (
        <div className={"container-fluid centra"}>
            <div className={"container-fluid w-100 text-center h-100 align-items-center"}>
                <span className={"d-block w-100"}>
                    <h1 className={"text-white amiri w-100 midtext mb-0"}>{props.frase1}</h1>
                    <h1 className={"text-white amiri w-100 midtext midbot pt-md-4 " + props.classi}>{props.frase2}</h1>
                    <h1 className={"text-white nunito w-100 midtext midsub pt-md-4 " + props.classi}>{props.frase3}</h1>
                </span>
            </div>
        </div>
    );
}

export default Text2;


