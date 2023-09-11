import { Conteiner } from "./style";
import { useEffect } from "react";

import { MiniCard } from "../MiniCard";
import iconReact from '../../assets/reactjs.svg';
import iconNode from '../../assets/node.svg';
import iconJs from '../../assets/javascript.svg';
import iconSt from '../../assets/styled.svg';
import iconTS from '../../assets/typescript.svg';

export function BoxIcons({ ts, rc, js, nd, sc }) {

    return(
        <Conteiner>
            {rc && (
                <MiniCard
                    imgTitle={iconReact}
                    subTitle="imagen simbolo React"
                    subText="React"
                />
            )}
            
            {js && (
                <MiniCard
                    imgTitle={iconJs}
                    subTitle="imagem simbolo java script"
                    subText="Java Script"
                />
            )}

            {sc && (
                <MiniCard
                    imgTitle={iconSt}
                    subTitle="imagem simbolo styled components"
                    subText="Styled Components"
                />
            )}

            {nd && (
                <MiniCard
                    imgTitle={iconNode}
                    subTitle="imagem simbolo NodeJs"
                    subText="Node.JS"
                />
            )}
            
            {ts && (
                <MiniCard
                    imgTitle={iconTS}
                    subTitle="imagem simbolo TypeScrypt"
                    subText="TypeScript"
                />
            )}
        </Conteiner>
    )
};