import { Conteiner } from "./style";

import { ButtonText } from "../ButtonText";

export function ProjctCard({imgLogo, titleCd, subTitleCd, btnRef, btnRefGit, ...rest}) {

    return(
        <Conteiner>
            <img src={imgLogo} alt="imagem de um projeto" />
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
                    
                    <ButtonText
                        title={"Vizualizar deploy"}
                        aRef={btnRef}
                    />
                </div>
            </div>
        </Conteiner>
    )
};