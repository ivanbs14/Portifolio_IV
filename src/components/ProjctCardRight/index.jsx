import { Conteiner } from "./style";
import { ButtonText } from "../ButtonText";
import imgPlay from '../../assets/play.svg'

export function ProjctCardRight({imgLogo, titleCd, subTitleCd, btnRef, btnRefTwo, btnRefGit, openClick, ...rest}) {

    const handleDeployClick = () => {
        if (btnRef) {
            // Se btnRef estiver definido, redirecione para a visualização de deploy
            window.location.href = btnRef;
        }

        if (btnRefTwo) {
            window.location.href = btnRefTwo;
        }
    };

    return(
        <Conteiner>
            <div className="descript">
                <h3>{titleCd}</h3>
                <p>{subTitleCd}</p>
                <p>Tecnologias usadas:</p>
                <div className="icons" {...rest}/>

                <span>ATENÇÃO: OS SERVIDORES DO DEPLOY SÃO GRATUITOS, PORTANTO AO CLICAR, AGUARDE 1 MINUTO, ATUALIZE A PÁGINA PARA QUE O PROJETO SEJA INICIALIZADO</span>
                <div className="datas">
                    <ButtonText
                        title={"Repositório GIT"}
                        aRef={btnRefGit}
                    />
                    
                    {btnRef && (
                        <ButtonText 
                            onClick={handleDeployClick}
                            title={"Visualizar deploy"}
                            aRef={btnRef}
                            
                        />
                    )}

                    {btnRefTwo && (
                        <ButtonText 
                            onClick={handleDeployClick}
                            title={"Visualizar Video"}
                            aRef={btnRefTwo}
                            
                        />
                    )}
                </div>
            </div>
            <div className="img-container">
                <img src={imgLogo} alt="imagem de um projeto" />
                <div className="imgPlay" onClick={openClick}>
                    <img src={imgPlay} alt="imagem de um projeto" />
                </div>
            </div>
        </Conteiner>
    )
};