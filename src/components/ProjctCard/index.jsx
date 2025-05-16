import { Conteiner } from "./style";

import { ButtonText } from "../ButtonText";
import imgPlay from '../../assets/play.svg'

export function ProjctCard({imgLogo, titleCd, subTitleCd, btnRef, btnRefGit, openClick, ...rest}) {

    const handleDeployClick = () => {
        if (btnRef) {
            // Se btnRef estiver definido, redirecione para a visualização de deploy
            window.location.href = btnRef;
        }
    };

    return(
        <Conteiner>
            <div className="img-container">
                <img src={imgLogo} alt="imagem de um projeto" />
                <div className="imgPlay" onClick={openClick}>
                    <img src={imgPlay} alt="imagem de um projeto" />
                </div>
            </div>
            <div className="descript">
                <h3>{titleCd}</h3>
                <p className="boxText">{subTitleCd}</p>
                <p>Tecnologias usadas:</p>
                <div className="icons" {...rest}/>

                <div className="datas">
                    {btnRefGit && (
                        <ButtonText 
                            onClick={() => window.open(btnRefGit, "_blank")}
                            title={"Ver código"}
                            aRef={btnRefGit}
                        />
                    )}
                    
                    {btnRef && (
                        <ButtonText 
                            onClick={handleDeployClick}
                            title={"Visualizar deploy"}
                            aRef={btnRef}
                            
                        />
                    )}
                </div>
            </div>
        </Conteiner>
    )
};