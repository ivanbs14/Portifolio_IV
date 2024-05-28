import ReactPlayer from "react-player";
import { Conteiner } from "./style";
import { BoxIcons } from "../BoxIcons";

export function MoviePg({ propsMovie }) {

    return(
        <Conteiner>
            <div className="player-wrapper">
                <ReactPlayer 
                    className="react-player"
                    light={true}
                    controls={true}
                    url={propsMovie.video}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className="descriptMovie">
                <h2>{propsMovie.titleCd}</h2>
                <div className="icons">
                    <p>{propsMovie.subTitleCd}</p>
                    <p>Tecnologias usadas:</p>
                    <BoxIcons {...propsMovie.icons} />
                </div>
            </div>
        </Conteiner>
    )
};